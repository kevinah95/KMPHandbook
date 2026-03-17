---
title: Networking and async programming with Ktor
description: Learn how to implement networking in your Kotlin Multiplatform projects using Ktor, a lightweight and easy-to-use networking framework.
---

## What is Ktor?

Ktor is a lightweight and flexible framework for building asynchronous servers and clients in Kotlin. It is designed to be simple and easy to use, making it a popular choice for both Android and Kotlin Multiplatform projects. Ktor allows you to create HTTP clients and servers with minimal configuration, making it a great option for developers who want a straightforward networking solution.

## Why use Ktor in Kotlin Multiplatform?

Using Ktor in Kotlin Multiplatform projects offers several benefits:
- **Simplicity**: Ktor's API is intuitive and easy to use, allowing
you to create HTTP clients and servers with minimal boilerplate code.
- **Multiplatform support**: Ktor is designed to work seamlessly across multiple platforms, including Android, iOS, JVM, and JavaScript, making it an ideal choice for Kotlin Multiplatform projects.
- **Asynchronous programming**: Ktor is built on top of Kotlin's coroutines, allowing you to write asynchronous code in a more natural and efficient way, without blocking the main thread.
- **Extensibility**: Ktor provides a wide range of features and plugins that can be easily integrated into your application, allowing you to customize and extend its functionality to meet your specific needs.

## Async programming with Ktor

Ktor is built on top of Kotlin's coroutines, which allows you to write asynchronous code in a more natural and efficient way. When making network requests with Ktor, you can use the `suspend` keyword to indicate that a function is asynchronous and can be suspended without blocking the main thread. This allows you to perform network operations without freezing the user interface or causing performance issues. For example, you can create a simple HTTP client using Ktor like this:

```kotlin title="shared/src/commonMain/kotlin/networking/HttpClient.kt"
import io.ktor.client.*
import io.ktor.client.request.*
class HttpClient {
    private val client = HttpClient()

    suspend fun get(url: String): String {
        return client.get(url)
    }
}
``` 

In this example, the `get` function is marked as `suspend`, which means it can be called from a coroutine and will not block the main thread while the network request is being made. You can then use this `HttpClient` class in your shared code to perform network operations across all platforms, while still benefiting from the asynchronous programming model provided by Ktor and Kotlin's coroutines.

