# Classes (ES6)

### What is a class?

> Classes are code structures which provide a template for creating objects. They are mainly used to encapsulate data with the code to work on that data


### ES6 class definition syntax

```js
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

**NOTE:**
- Like function expressions, class expressions may be anonymous, or have a name that's different from the variable that it's assigned to.
- Unlike function declarations, class declarations have the same temporal dead zone restrictions as let or const and behave as if they are not hoisted. Meaning that they always have to be declared before the point where they are to be used. 

### Adding properties to a class

#### Constructor

The constructor is a special function which is executed on creation of an object. It's only run once in the lifecycle of an object's creation. The syntax of a constructor:

```js
class Animal {
  constructor() {
    // statements go in here
  }
}
```
The example above show the example of an _Animal_ class with a constructor defined which takes no argument and performs some functions. In some conditions, it's desirable for a constructor to receive arguments.

**NOTE:** If we fail to define a constructor for our class, Javascript will provide a default function behind the scenes during compilation of our code.

Learn more about constructors 👉 [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

#### fields
A _field_ is simply a property of a class which is used to hold data relevant to objects of that class. syntax:

```js
class Animal {
  // ...
  // creating a field
  field_name = field_value;
  // making use of the field
  this.field_name;
  // ...
}
```
By default, fields in javascript classes are _public_ (can be accessed outside the class) when declared. But we can make them _private_ (no longer accessible outside class definition) by prefixing their names with the `#` sign during declaration. syntax for _private_ fields definition:

```js
class Animal {
  // ...
  // creating a field
  #field_name = field_value;
  // making use of the field
  this.#field_name;
  // ...
}
```
Learn more about public class fields 👉 [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

It's usually a good idea to make class fields private. Learn more about them here 👉 [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields#private_fields)

#### Methods
A method is simply a function provided by a class which allows the user to perform some actions/tasks on the data stored within said class. syntax:

```js
class Animal {
  // ...
  methodName() {
    // statements
  }
  // ...
}
```

Just like fields, methods are by default _public_ but can also be made _private_. syntax:
```js
class Animal {
  // ...
  #methodName() {
    // statements
  }
  // ...
}
```

Read more about public methods 👉 [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions). And, you can check out private methods 👉 [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields#private_methods)

#### getters & setters
Going back to the point I made in the _fields_ subsection above, that:
>It's usually a good idea to make class fields private
You may be wondering why that is the case, right?

Well, In one word, it's all about **Control**. In particular, as programmers, we would like to have control the way in which our field's value gets modified. A public field would not help matters here because anybody can simply access and alter the data as they see fit, which is clearly not what we want. To stop this from happening, we usually keep data in private fields and control external access through the use of special javascript methods known as _setters_ and _getters_.

Example syntax:

```js
class Animal {
  //...
  #age;
  // getter for the age 
  get age() {
    return this.#age;
  }

  set age(value) {
    // Ensures that age is a positive number greater than zero
    if (typeof value === 'number' && value > 0) {
      this.#age = value
    }
  }
}

//using the class
const animal = new Animal();
console.log(animal.age); // using the getter
animal.age = 2; // using the setter
```
Read more about _setters_ and _getters_ 👉 [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) and [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) respectively.

### Static methods & fields (Why? & How?)
static properties are properties which on compilation are attached on the class and can be referenced by all instances / objects of said class. In order to make a property static, you just have to prefix it's definition with the `static` keyword and a space. Another way of understanding what static properties are is by thinking of it in terms of _ownership_, i.e:

>Normal (Instance) properties are owned by individual objects of a class and can only be referenced by and through said objects/instances. While, `static` properties are owned by the class it'self and can be referenced by all objects/instances of said class through the class.

How to define `static` properties example code:
```js
class Animal {
  // Static fields:
  static publicStaticField;
  static #privateStaticField;

  // static methods
  static publicStaticMethod() {
    // statements
  }

  static #privateStaticMethod() {
    // statements
  }
}
```
To learn more about static properties, check 👉 [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) and [here (Try to read downwards)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

### Class Inheritance in ES6
Sometimes we may want to create a class which can be said be a type/subset of another class, In that case, we want our new class to _inherit_ the features from the main class while defining those features unique to it. This is called _Inheritance_ in programming. We use the `extends` keyword to indicate inheritance in javascript. The class to be inherited from is known as the superclass while the class doing the inheriting is known as the subclass. We use the `super` keyword in order to gain access to a data or functionality in a superclass from it's subclass.

Example syntax:
```js
// Super class
class Animal {
  constructor() {
    // statements to construct object
  }

  makeNoise() {
    // generic statements that allow any animal make some noise
  }
}

// Sub class
class Dog extends Animal {
  constructor() {
    super(); // Invoking superclass constructor
    // other statements
  }

  bark() {
    super.makeNoise(); // leveraging function defined in superclass
    // other statements
  }
}
```
Learn more about this 👉 [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

### Metaprogramming & Symbols

#### What is Metaprogramming?
> Metaprogramming is (loosely) all about the underlying mechanics of the language, rather than "high level" data modelling or business logic. If programming can be described as "making programs", metaprogramming could be described as "making programs making programs"

Essentially, the idea behind metaprogramming is being able to create code that can constantly check for changes in it's structure, nature or maybe even it's composition and using these information can either chose to make changes to it's own structure or just keep track of said information.

Javascript (ES6) provides developers with the ability to implement metaprogramming functionality using anyone of the following data-types/Primitives/mechanisms (_Click on any of them to read more_):
- [Symbols](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)
- [Reflect](https://www.keithcirkel.co.uk/metaprogramming-in-es6-part-2-reflect/)
- [Proxies](https://www.keithcirkel.co.uk/metaprogramming-in-es6-part-3-proxies/)

Do endeavour to read on each of them when you get the time/chance. They're all exciting reads, especially if you're a nerd like me 😂

#### What is `Symbol`?
`Symbol` is a new primitive type introduced in ES6 which enables us to create symbols (Well, what else did you expect to read? 😂). These symbols indeed provide us with truly unique values which we can then leverage in our code.

The most important use of Symbols stems from the fact that you can use them to create unique metaprogramming functionality that makes it easier for programmers to leverage said metaprogramming in their programs. And this to an extent is what ES6 does for us by providing us a set of Symbols which can be used to perform metaprogramming.

In order to learn more, please consulting the article on `Symbols` as linked above.
