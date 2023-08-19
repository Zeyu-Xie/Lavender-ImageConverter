# Blob 工具函数说明

本仓库包含一组用于在 JavaScript 中处理二进制大对象（Blob）的实用函数。这些函数提供了在不同数据表示之间进行转换的方法，如Base64、Blob、URL和FormData，以便在各种情境下更轻松地处理和操作二进制数据。

## 函数列表

### `base64ToBlob(base64Data, contentType)`

此函数接受一个Base64编码的字符串（`base64Data`）和一个可选的内容类型（`contentType`）作为参数。它将Base64数据转换为Blob，并返回生成的Blob对象。

```javascript
const blob = base64ToBlob(base64Data, contentType);
```

### `urlToBlob(url)`

这是一个异步函数，接受一个URL（`url`）作为参数，然后从该URL获取内容。然后将获取的内容转换为Blob，并返回Blob对象。

```javascript
try {
    const blob = await urlToBlob(url);
} catch (error) {
    console.error("将URL转换为Blob时出错:", error);
}
```

### `formDataToBlob(formData)`

此函数接受一个FormData对象（`formData`）作为参数，并从FormData中提取与键名"file"关联的Blob。然后返回提取的Blob。

```javascript
const blob = formDataToBlob(formData);
```

### `blobToUrl(blob)`

此函数接受一个Blob对象（`blob`）作为参数，并使用`URL.createObjectURL()`方法创建一个临时URL。然后返回创建的URL。

```javascript
const url = blobToUrl(blob);
```

### `blobToFormData(blob)`

此函数接受一个Blob对象作为参数。它创建一个FormData对象，将Blob附加到其中的"file"字段，并返回FormData对象。

```javascript
const formData = blobToFormData(blob);
```

### `blobToBase64(blob)`

此函数接受一个Blob对象（`blob`）作为参数，并返回一个Promise，该Promise会解析为Blob内容的Base64编码字符串表示。

```javascript
const base64Data = await blobToBase64(blob);
```

## 使用方法

您可以将这些实用函数包含在您的JavaScript项目中，以简化处理二进制数据的操作。在您的代码中导入或包含这些函数，并如上述示例所示使用它们。

请注意，这些函数按原样提供，根据您的使用情况可能需要额外的错误处理和验证。

## 许可证

此代码根据MIT许可证提供。您可以在[LICENSE](LICENSE)文件中找到完整的许可证文本。

---

欢迎通过开启问题或创建拉取请求来贡献、报告问题或提出改进意见。您的反馈是宝贵的！

# Blob Utils README

This repository contains a set of utility functions for working with binary large objects (Blobs) in JavaScript. These functions provide methods to convert between different data representations, such as Base64, Blob, URL, and FormData, making it easier to handle and manipulate binary data in various contexts.

## Functions

### `base64ToBlob(base64Data, contentType)`

This function takes a Base64 encoded string (`base64Data`) and an optional content type (`contentType`) as parameters. It converts the Base64 data into a Blob and returns the resulting Blob object.

```javascript
const blob = base64ToBlob(base64Data, contentType);
```

### `urlToBlob(url)`

This asynchronous function takes a URL (`url`) as a parameter and fetches the content at that URL. It then converts the fetched content into a Blob and returns the Blob object.

```javascript
try {
    const blob = await urlToBlob(url);
} catch (error) {
    console.error("Error converting URL to Blob:", error);
}
```

### `formDataToBlob(formData)`

This function takes a FormData object (`formData`) as a parameter and extracts the Blob associated with the key "file" from the FormData. It returns the extracted Blob.

```javascript
const blob = formDataToBlob(formData);
```

### `blobToUrl(blob)`

This function takes a Blob object (`blob`) as a parameter and creates a temporary URL using the `URL.createObjectURL()` method. It returns the created URL.

```javascript
const url = blobToUrl(blob);
```

### `blobToFormData(blob)`

This function takes a Blob object as a parameter. It creates a FormData object, attaches the Blob to the "file" field within it, and returns the FormData object.

```javascript
const formData = blobToFormData(blob);
```

### `blobToBase64(blob)`

This function takes a Blob object (`blob`) as a parameter and returns a Promise that resolves to the Base64 encoded string representation of the Blob's content.

```javascript
const base64Data = await blobToBase64(blob);
```

## Usage

You can include these utility functions in your JavaScript projects to simplify working with binary data. Import or include the functions in your code and use them as demonstrated in the examples above.

Please note that these functions are provided as-is and may require additional error handling and validation depending on your use case.

## License

This code is provided under the MIT License. You can find the full license text in the [LICENSE](LICENSE) file.

---

Feel free to contribute, report issues, or suggest improvements by opening an issue or creating a pull request in this repository. Your feedback is valuable!