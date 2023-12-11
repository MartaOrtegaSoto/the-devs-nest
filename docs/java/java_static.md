---
id: java-static
sidebar_label: Static
sidebar_position: 3
description: ''
draft: true
tags: 
  - Java
---

# Static

Static in Java means that the member belongs to the class rather than to an instance of that class.

The keyword `static` can be applied to variables, methods, blocks and nested classes.

## Static Fields

When we declare a field static, only one copy of the field is created and it is shared among all instances of the class.

```java
// Cat.java
public class Cat {
  private String name;
  
  public static int numberOfCats = 0;

  public Cat(String name) {
    this.name = name;
    numberOfCats++;
  }
// App.java
public class App {
    public static void main (String[] args) {
      System.out.println(Cat.numberOfCats); // Output = 0
      Cat myCat = new Cat("Micho");
      System.out.println(Cat.numberOfCats); // Output = 1
    }
  }
}
```


## Static Methods



## Static Blocks
