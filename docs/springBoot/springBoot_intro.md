---
id: sb-introduction
sidebar_position: 1
sidebar_label: Introduction
description: ''
tags: 
  - SpringBoot
---
# Spring Boot Introduction

## What is Spring Boot

It is a framework build on top of the Spring framework to help simplify the configuration of it.

> A framework is a chunk of code written on top of a language's core library to solve common problems.

## Spring App Layers

### Persistence

```txt
                       +----------+
                       | entities | 
                       +----------+ 
                            | 
                            | 
+----------+       +-------------------+
| database | <---> | repositories/DAOs |
+----------+       +-------------------+
```

Handles interactions with the database.
At this level, we will have entities, which are java Objects that represent our domain and usually map to tables in the database.
Entities will interact with the database using one of a few different patterns :

- Repository
- DAO(Data Access Object)

The type of functionality exposed is called CRUD :

- **C**reate
- **R**ead
- **U**pdate
- **D**elete

### Service

```txt
+-------------------+        +---------+
| repositories/DAOs | <---> | services |
+-------------------+        +---------+
```

The goal of this layer is to use all of the functionality exposed by the persistence layer and use it to meet the requirement that our application is built to handle.
This will be done through a set of interfaces and their implementing classes, which are typically referred to as services.

### Presentation layer

```txt
+---------+        +-------------+
| services | <---> | controllers |
+---------+        +-------------+
```

The goal is to take all of the data that's the result of using the service layer and expose them to the user via an API (REST, GraphQL, Web Socket).
