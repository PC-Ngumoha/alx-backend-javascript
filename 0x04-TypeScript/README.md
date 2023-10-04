# Introduction To TypeScript

### What is TypeScript?


### Special Tips:
- In TypeScript, you can create an interface in a flexible way that allows you to add attributes without specifying their names by using an index signature. An index signature allows you to define an interface with dynamic property names. Here's an example:

```ts
interface MyInterface {
  [key: string]: any;
}

const obj: MyInterface = {
  attribute1: "value1",
  attribute2: 42,
  // You can add new attributes without specifying their names
  attribute3: [1, 2, 3],
  attribute4: { key: "value" },
};

console.log(obj.attribute1); // "value1"
console.log(obj.attribute2); // 42
console.log(obj.attribute3); // [1, 2, 3]
console.log(obj.attribute4); // { key: "value" }
```