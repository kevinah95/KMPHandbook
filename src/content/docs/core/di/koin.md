---
title: Dependency Injection with Koin
description: Learn how to implement dependency injection in your Kotlin Multiplatform projects using Koin, a lightweight and easy-to-use DI framework.
---

## What is Dependency Injection?

Dependency Injection (DI) is a design pattern that allows you to manage the dependencies of your application in a more flexible and modular way. Instead of hardcoding dependencies within your classes, DI allows you to inject them from the outside, making it easier to test, maintain, and scale your application. In Kotlin Multiplatform projects, DI can help you manage shared code and platform-specific implementations more effectively, allowing you to write cleaner and more maintainable code across multiple platforms.

### Without Dependency Injection

```kotlin
class UserRepository {
    private val apiService = ApiService() // Directly creating dependency  
    fun getUserData() {
        apiService.fetchUserData()
    }
}
```

#### Problems with this approach:
- **Tight coupling**: The `UserRepository` class is tightly coupled to the `ApiService` implementation, making it difficult to change or replace the `ApiService` without modifying the `UserRepository` class.
- **Difficult to test**: It becomes challenging to unit test the `UserRepository` class in isolation, as it directly creates an instance of `ApiService`, which may have its own dependencies and side effects.
- **Limited flexibility**: If you want to use a different implementation of `ApiService` (e.g., for testing or different platforms), you would need to modify the `UserRepository` class, which can lead to code duplication and maintenance issues.

### With Dependency Injection

```kotlin
class UserRepository(private val apiService: ApiService) { // Dependency is injected
    fun getUserData() {
        apiService.fetchUserData()
    }
}
```

#### Benefits of this approach:
- **Loose coupling**: The `UserRepository` class is now decoupled from the specific implementation of `ApiService`, allowing you to easily swap out the dependency without modifying the `UserRepository` class.
- **Easier testing**: You can now easily unit test the `UserRepository` class by injecting a mock or fake implementation of `ApiService`, allowing you to test the `UserRepository` class in isolation.
- **Greater flexibility**: You can use different implementations of `ApiService` for different platforms or testing scenarios without modifying the `UserRepository` class, making your codebase more flexible and maintainable.



## What is Koin?

Koin is a lightweight dependency injection (DI) framework for Kotlin. It is designed to be simple and easy to use, making it a popular choice for both Android and Kotlin Multiplatform projects. Koin allows you to manage dependencies in your application without the need for complex configuration or code generation, making it a great option for developers who want a straightforward DI solution.

## Why use Koin in Kotlin Multiplatform?

Using Koin in Kotlin Multiplatform projects offers several benefits:
- **Simplicity**: Koin's DSL (Domain Specific Language) is intuitive and easy to read, allowing you to define your dependencies in a clear and concise manner.
- **No code generation**: Koin does not require any code generation, which means you can avoid the overhead and complexity associated with annotation processing or other code generation techniques used by some DI frameworks.
- **Multiplatform support**: Koin is designed to work seamlessly across multiple platforms, including Android, iOS, JVM, and JavaScript, making it an ideal choice for Kotlin Multiplatform projects.
- **Lightweight**: Koin has a small footprint and minimal dependencies, which helps keep your application lean and efficient.

## Definition of dependencies with Koin

Koin provides two ways to define dependencies: using a **Kotlin DSL** or using annotations. The DSL approach allows you to define your dependencies in a more flexible and dynamic way, while the annotation-based approach can be more concise and easier to read in some cases. Both approaches are fully supported in Kotlin Multiplatform projects, so you can choose the one that best fits your needs and preferences. In this handbook, we will focus on the DSL approach for defining dependencies with Koin, as it is more commonly used in Kotlin Multiplatform projects and offers greater flexibility.

DSL Example:

```kotlin title="AppModule.kt"
val appModule = module {
    single { ApiService() } // Define a singleton dependency
    factory { UserRepository(get()) } // Define a factory dependency that depends on ApiService
    viewModel<UserViewModel>() { UserViewModel(get()) } // Define a ViewModel dependency that depends on UserRepository
}
```

## Koin Classic DSL vs Compiler Plugin

And DSL have two approaches: classic and compiler plugin. The classic approach is more flexible and allows for dynamic definitions, while the compiler plugin approach can provide better performance and compile-time safety. Both approaches are fully supported in Kotlin Multiplatform projects, so you can choose the one that best fits your needs and preferences. In this handbook, we will focus on the compiler plugin approach for defining dependencies with Koin, as it offers better performance and compile-time safety, which can be particularly beneficial in Kotlin Multiplatform projects where performance is often a concern.

Comparison of both approaches:

| Classic DSL | Compiler Plugin |
|-------------|-----------------|
| `single { ApiService() }` | `single<ApiService>()` |
| `factory { UserRepository(get()) }` | `factory<UserRepository>()` |
| `viewModel { UserViewModel(get()) }` | `viewModel<UserViewModel>()` |