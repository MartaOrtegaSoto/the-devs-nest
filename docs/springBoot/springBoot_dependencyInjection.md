---
id: sb-dependency-injection
sidebar_position: 2
sidebar_label: Dependency Injection
description: ''
tags: 
  - SpringBoot
---
# SpringBoot Dependency Injection

- Inversion of Control is a design principle that inverts the flow of control in a program by decoupling components, making them more flexible and easier to maintain.
- In a traditional approach, high-level components are in control of the flow and call low-level components.
- With IoC, this control is inverted, and low-level components are responsible for the flow, allowing high-level components to focus on their core functionalities.

## Inversion of Control (IoC)

To understand dependency injection we need to get a little abstract :

- Let's say we were going to write a class and our class depends on three other classes in order to achieve its goal.
- One way of handling these dependencies is that we can create them inside of our green class by using the Java `new` keyword in a constructor

```java
// Traditional way
public class ColorPrinter {
  private RedPrinter redPrinter; // interface
  private BluePrinter bluePrinter; // interface

  public ColorPrinter() {
    redPrinter = new EnglishRedPrinter();
    bluePrinter = new EnglishBluePrinter();
  }
}
```

- If we needed to change these dependencies, swap them out, we'd actually need to change the code inside of the green class and we don't want to do that just to swap out and change a dependency.

## Dependency Injection

- Now let's say instead of creating those dependency classes inside of our class, we just declare the different interfaces that those classes meet.
- In that case, something would need to provide the concrete classes that meets these implementations and we can have something sat around the outside of the class to do that, such as the **Spring Framework Container** and it will be up to the framework to create the concrete classes and then inject them where they are actually needed.

```java
// Dependency injection
public class ColorPrinter {
  private RedPrinter redPrinter; // interface
  private BluePrinter bluePrinter; // interface

  public ColorPrinter(RedPrinter redPrinter, BluePrinter bluePrinter) {
    this.redPrinter = redPrinter;
    this.bluePrinter = bluePrinter;
  }
}
```

- In this way of doing things, if we needed to swap a dependency for a new class that implemented the same interface in a slightly different way, we would create a new concrete class that met the interface and the framework will inject it where that interface is declared.
- The ownership of the dependencies has moved from the class to something operating at much higher level.
- This is termed an **Inversion of Control** and in this pattern in particular, **Dependency Injection**.

## Introducing Beans

- Coding to interfaces instead of concrete classes is the way to do things and it's up to the framework to supply the concrete classes wherever we declare our interfaces via dependency injection.
- The term **beans** refers to those concrete classes, that is the term that spring framework uses and by extension spring boot.

### @Configuration

- Beans can be defined in a configuration class.
- The annotation `@Configuration` has to be added to the class to tell Spring to look into this class for bean definitions.

### @Bean

- This annotation is used to indicate that a method instantiates, configures and initializes a new object to be managed by the Spring IoC container.

```java
@Configuration
public class PrinterConfig {
  private RedPrinter redPrinter; // interface
  private BluePrinter bluePrinter; // interface

  @Bean
  public RedPrinter redPrinter() {
    return new EnglishRedPrinter();
  }

  @Bean
  public BluePrinter bluePrinter() {
    return new EnglishBluePrinter();
  }
}
```
