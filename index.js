const base64ToBlob = (base64Data, contentType) => {
    contentType = contentType || '';
    const byteCharacters = atob(base64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
}

async function urlToBlob(url) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        return blob;
    } catch (error) {
        console.error("Error converting URL to Blob:", error);
        throw error;
    }
}

function formDataToBlob(formData) {
    return formData.get("file");
}


function blobToUrl(blob) {
    return URL.createObjectURL(blob);
}

function blobToFormData(blob, fileName, contentType) {
    const formData = new FormData();
    formData.append("file", blob, fileName);
    return formData;
}

function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function (event) {
            const base64Data = event.target.result.split(',')[1]; // Get the Base64 data part
            resolve(base64Data);
        };

        reader.onerror = function (event) {
            reject(event);
        };

        reader.readAsDataURL(blob);
    });
}