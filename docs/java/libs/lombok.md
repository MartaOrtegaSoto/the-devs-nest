---
id: lombok
sidebar_label: Lombok
sidebar_position: 0
description: ''
tags: 
  - Java
---
<!-- plugins:start -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lombok

- Lombok is a Java library that generates boilerplate code at compile time by using different annotations.

## Maven dependency

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.28</version>
    <scope>provided</scope>
</dependency>
```
- Since Lombok is used at compile time, we use the scope provided to indicate that we won't need to include the dependency in the artifact.

- [Check latest version](https://mvnrepository.com/artifact/org.projectlombok/lombok)

## Getters and Setters

- To add getters and setters via annotations, we can use `@Getter` and `@Setter`.
- They can be used as either class or field annotations.
<Tabs>
  <TabItem value="class" label="Class">
  ```java
  @Getter
  @Setter
  public class Book {
    private String title;
    private String author;
  }
  ```
  </TabItem>
  <TabItem value="field" label="Field">
  ```java
  public class Book {
    @Getter
    @Setter
    private String title;
    @Getter
    @Setter
    private String author;
  }
  ```
  </TabItem>
</Tabs>

## Constructors

- A constructor with no arguments can be generated with `@NoArgsConstructor`
- A constructor with all class fields as arguments can be generated with `@NoArgsConstructor`

<Tabs>
  <TabItem value="lombok" label="With Lombok">
  ```java
  @NoArgsConstructor
  @AllArgsConstructor
  public class Book {
    private String title;
    private String author;
  }
  ```
  </TabItem>
  <TabItem value="no-lombok" label="Without Lombok">
  ```java
  public class Book {
    private String title;
    private String author;

    public Book() {}

    public Book(String title, String author) {
      this.title = title;
      this.author = author;
    }
  }
  ```
  </TabItem>
</Tabs>

## To String method

- To generate the `toString` method we can simply use the annotation `@ToString`.

## Equals and hashCode

- The annotation `@EqualsAndHashCode` generates the `equals` and `hashCode` implementation for all the fields.

<!-- plugins:end -->

## @Data

- The annotation `@Data` is a shortcut for several other annotations, which allows us to reduce the number of annotations in the class.
- Annotations grouped by `@Data` : `@Getter`, `@Setter`, `@ToString`, `@EqualsAndHashCode`, `@RequiredArgsConstructor`

<Tabs>
  <TabItem value="data" label="@Data">
  ```java
  @Data
  @NoArgsConstructor
  @AllArgsConstructor
  public class Book {
    private String title;
    private String author;
  }
  ```
  </TabItem>
  <TabItem value="individual" label="Individual Annotations">
  ```java
  @Getter
  @Setter
  @ToString
  @EqualsAndHashCode
  @NoArgsConstructor
  @AllArgsConstructor
  public class Book {
    private String title;
    private String author;
  }
  ```
  </TabItem>
</Tabs>

## Loggers

- We can use `@Log` at class level to generate a logger for the class.
- It will create a `log` variable that will be available to use within the class.

<Tabs>
  <TabItem value="lombok" label="With Lombok">
  ```java
  @Log
  public class App {
    public static void main (String[] args) {
      log.info("Starting the application")
    }
  }
  ```
  </TabItem>
  <TabItem value="no-lombok" label="Without Lombok">
  ```java
  public class App {
    final static Logger log = Logger.getLogger(App.class.getName());

    public static void main (String[] args) {
      log.info("Starting the application")
    }
  }
  ```
  </TabItem>
</Tabs>

## Builder Pattern

- The Builder Pattern can be easily implemented with the `@Builder` annotation.

<Tabs>
  <TabItem value="lombok" label="With Lombok">
  ```java
  @Builder
  public class Book {
    private String title;
    private String author;
    private int yearPublished;
  }

  public class BookUtils {
    public Book createNewBook () {
      return Book.builder()
        .title("My title")
        .author("Me")
        .build();
    }

    public Book createAnonymousBook() {
      return Book.builder()
        .title("My title")
        .build();
    }
  }

  ```
  </TabItem>
  <TabItem value="no-lombok" label="Without Lombok">
  ```java
  public class Book {
    private String title;
    private String author;
    private int yearPublished;

    public Book(String title, String author, int yearPublished) {
      this.title = title; 
      this.author = author;
      this.yearPublished = yearPublished;
    }

    public Book(String title, int yearPublished) {
      this.title = title; 
      this.yearPublished = yearPublished;
    }
  }

  public class BookUtils {
    public Book createNewBook () {
      return new Book("My title", "Me", 2005);
    }

    public Book createAnonymousBook() {
      return new Book("My title",  2005);
    }
  }
  ```
  </TabItem>
</Tabs>
