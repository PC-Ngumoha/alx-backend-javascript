# TypeScript

## Overview


**NOTE:** One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called _duck typing_ or _structural typing_.

## Syntax

### Simple Variable Declaration:

```ts
let var: type = value;

        OR

const var: type = value;
```


### Array declaration:

#### without unions
```ts
let arr: type[] = [];
const arr: type[] = [];
```

#### with unions

```ts
let arr: (type1|type2|...)[] = [];
const arr: (type1|type2|...)[] = [];
```

### Dynamic _any_ type

```ts
let var: any = value;
const var: any = value;
```

### Functions

```ts
const greet: Function = () => {};
```

#### Optional params:

```ts
const func: Function = (param1: type1, param2?: type2) => {};
```

#### Default params:

```ts
const func: Function = (param1: type1, param2: type2 = defaultValue) => {};
```

#### Return types:

```ts
const func: Function = (param1: type1): returnType => {};
```

#### Defining a function with its' function signature:

```ts
const func: (param: paramType...) => funcReturnType 
```

### Type Aliases:

```ts
type nameOfNewAlias = type1 | type2 ...;

// using it to create a variable
let var: nameOfNewAlias = value;

// using it in function params
const func = (param: nameOfNewAlias): returnType => {};
```

We can also use them to represent object type structures:

```ts
type newObjAlias = {field: type ...}
```

We can then proceed to using this in variable definitions and even in function parameter definitions.


### Working with the DOM

**NOTE:** When working with elements for which are sure that the element is not null, we can use the null-aware operator **_!_** to indicate to typescript that it is okay to run the code. We do this by appending the **_!_** mark to the end of the variable or element in question.

**NOTE:** Typescript also offers special types for each DOM element which we can use to specify the types of each element we may want to pull from the DOM into our code.

**NOTE:** When fetching a DOM element using it's class name in typescript, we use Type Casting to ensure that it gets fetched as a specific type of DOM element. This is done using the **_as_** keyword from javascript.

### Classes

```ts
class AClass {
  field1: type
  .
  .
  .

  constructor(param: type, ...) {}
}
```

#### Access Modifiers:
```ts
class AClass {
  accessModifier field1: type
  .
  .
  .

  constructor(param: type, ...) {}
}
```
There are four access modifiers in typescript:
- `public`: allows field to be accessed by code external to it's containing class
- `private`: Does not allow read or write access from the outside
- `protected`
- `readonly`: allows read but not write access from the outside

### Modules
It's usually a good idea to split your code into multiple modules.

Typescript makes use of the ES6 _import/export_ module system

### Interfaces

```ts
interface {
  field: type
  .
  .
  .
}
```
Interfaces are used to define the structure of objects.

### Generics

_Generics_ is a feature of Typescript which allows us to create reusable blocks of code (e.g functions) which can be used with different types.

A code example as shown below looks at how this could be used in the defining functions:
```ts
const func = <T>(param: T) => {
  // Performs whatever operations we want it to perform.
}
```

so now `func` can be called with parameters of any type. The above syntax poses a problem in situations where we would like to limit what types `T` can accept. Luckily, we can modify this by use of the `extends` keyword to ensure that `T` only accepts a specific type/class and it's child classes / related types as shown in the code block below:

```ts
// If we wanted to ensure that T is always an object:
const func = <T extends object>(param: T) => {
  // Performs whatever operations we want it to perform.
}
```
And with this change, we ensure that `func` can only be called with params that are of type `object`. We could also use the `extends` with interfaces.

We can also create interfaces that make use of generic types in their definition:

```ts
interface InterfaceName<T> {
  field: T  // or ANY OTHER TYPE
  .
  .
  .
}
```

### Tuples
In a tuple, each index in the tuple is assigned a type and cannot be changed to accept some other type after the fact.

```
let tupleName: [type1, type2, type3, ...] = [valOfType1, valOfType2, valOfType3, ...];
```

## Helpful Tutorials

- [Net Ninja](https://youtu.be/2pZmKW9-I_k?si=7cvHofsnxCyGYrv0)
