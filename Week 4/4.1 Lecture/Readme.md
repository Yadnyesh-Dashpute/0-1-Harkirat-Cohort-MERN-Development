## DOM Model

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, allowing scripts to dynamically access and manipulate the content, structure, and styling of a document. With the DOM, developers can modify elements, attributes, and styles, handle events, and create interactive web applications.

## Fetching Data from Backend

The Fetch API provides a modern, promise-based method for making asynchronous requests to the backend. It allows developers to fetch resources, such as data or files, from a server. With `fetch()`, you can easily make GET, POST, and other types of HTTP requests, handle responses, and work with JSON or other data formats to create dynamic and interactive web applications.



## Debouncing

Debouncing is a programming practice used to ensure that time-consuming functions do not fire so often, improving performance and resource usage. It's particularly useful in scenarios where a function is triggered multiple times in quick succession but only needs to be executed once or at controlled intervals.

### How Debouncing Works

When an event is triggered frequently, such as a user typing in an input field or resizing a window, the associated function can be called numerous times. Without debouncing, this can lead to performance issues and unnecessary function executions. Debouncing delays the execution of the function until after a specified period of time has passed since the last time the event was fired.
