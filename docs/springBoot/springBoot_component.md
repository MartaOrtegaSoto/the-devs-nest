---
id: sb-component
sidebar_position: 3
sidebar_label: Components
description: ''
tags: 
  - SpringBoot
---
# SpringBoot Components

## Component Scanning

- Component Scanning is the process where Spring looks through the project to look for **Bean** definition and where are those beans needed.
- This process starts when the application starts up.

## Annotations

### @Component

- It is a class-level annotation
- It tells Spring that the class is a **Bean** and it should be put inside the **application context**.
- It also indicates that its dependencies (ex: via constructor) should be injected as well.

```java
@Component
public class ColourPrinter {
  private RedPrinter redPrinter; // interface
  private BluePrinter bluePrinter; // interface

  public ColourPrinter(RedPrinter redPrinter, BluePrinter bluePrinter) {
    this.redPrinter = redPrinter;
    this.bluePrinter = bluePrinter;
  }
}
```

### @Service

- It has the same behaviour as the `@Component` annotation.
- It works as an alias of the `@Component` annotation and indicates a specialized use, classes annotated with `@Service` hold some business logic.

### @Controller

- It has the same behaviour as the `@Component` annotation.
- It works as an alias of the `@Component` annotation and indicates a specialized use, classes annotated with `@Controller` hold some business logic.

### @Repository

- It has the same behaviour as the `@Component` annotation.
- It works as an alias of the `@Component` annotation and indicates a specialized use, classes annotated with `@Repository` belong to the persistence layer and
