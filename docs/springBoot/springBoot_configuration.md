---
id: sb-configuration
sidebar_position: 4
sidebar_label: Configuration
description: ''
tags: 
  - SpringBoot
---

# SpringBoot Configuration

<!-- plugins:start -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Spring Boot provides a set of sensible default configurations for your application and those configs can be changed or added to if needed.

## Configuration Files

- The configuration file can be found at `src/main/resources/application.properties`.
- The configuration file can be also written in Yaml, using the apropriate extension, `application.yml`.
- For Unit Tests, the file in `src/main/resources` will be used as a base, we can create a config file in `src/test/resources` to override/add properties for the tests.

<Tabs>

<TabItem value="properties" label="application.properties">
```properties
server.port=8081
```
</TabItem>

<TabItem value="yaml" label="application.yml">
```yaml
server:
  port: 8081
```
</TabItem>
</Tabs>


- Properties documentation page : [Spring Boot Properties List](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html)

## Command Line arguments

<mark class="todo">Add possibility to set properties via cmd</mark>

## Environment Variables

- When running the app in things like Docker, environment variables are typically used to configure the app.

- To convert a property to an environment variable, we make the key uppercase and change any delimiters (dot or hyphen) for an underscore

```bash
# server.port=8181
SERVER_PORT=8181
```
## Configuration Properties

- We can define custom configuration for our project, it will be loaded the same way as the default config.
- We need to add the annotation `@ConfigurationProperties` and indicate the prefix to use for the properties.
- Each attribute will correspond to a property
- The annotation `@Configuration` will also be necessary to indicate Spring to look for beans in the class.

```java
@Configuration
@ConfigurationProperties(prefix = "pizza")
public class PizzaConfig {
  private String sauce;
  private String topping;
  private String crust;
}

```

<Tabs>

<TabItem value="properties" label="application.properties">
```properties
pizza.sauce=tomato
pizza.crust=thin
pizza.topping=mozzarella
```
</TabItem>

<TabItem value="yaml" label="application.yml">
```yaml
pizza:
  sauce: tomato
  topping: mozzarella
  crust: thin
```
</TabItem>
<TabItem value="bash" label="env">
```bash
PIZZA_SAUCE=tomato
PIZZA_CRUST=thin
PIZZA_TOPPING=mozzarella
```
</TabItem>
</Tabs>

<!-- plugins:end -->
