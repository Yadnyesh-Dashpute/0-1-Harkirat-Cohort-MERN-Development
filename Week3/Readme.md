# Zod Middlewares for Express.js

Zod is a powerful TypeScript-first schema declaration and validation library. It makes data validation effortless, providing a straightforward way to define schemas and validate data against them. By integrating Zod with Express.js, you can streamline request validation in your applications, ensuring robustness and reducing boilerplate code.

## Features

- **Type Safety**: Zod provides TypeScript type inference, ensuring your schemas are type-safe and minimizing runtime errors.
- **Easy Integration**: Seamlessly integrates with Express.js to validate request data (body, query, params) using middleware.
- **Comprehensive Validation**: Supports a wide range of validation types including strings, numbers, arrays, objects, and more.
- **Custom Error Messages**: Define custom error messages to make debugging and user feedback more intuitive.
- **Transformations**: Easily transform input data during validation.
- **Immutable Data**: Zod schemas produce deeply immutable data, helping maintain data integrity.

## Installation

You can install Zod via npm or yarn:

```bash
npm install zod
```

Usage

```
const express = require("express")
const app = express()
const zod = require("zod")

function validatesInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),

    })

    const response = schema.safeParse(obj)
    console.log(response)
}

validatesInput({
    email:"yd@gmail.com",
    password:"12345678"

})
