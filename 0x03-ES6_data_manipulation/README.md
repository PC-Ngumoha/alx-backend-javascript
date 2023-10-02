# New Data Structures In ES6

### Typed Array
>Array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers.

To achieve maximum flexibility and efficiency, JavaScript typed arrays split the implementation into buffers and views. A _Buffer_ is essentially a generic object which contains a chunk of unformatted / raw data. A point to note is that: _We cannot directly read the data stored in a buffer_. In order to read said data, we need to use a _View_. A _View_ essentially provides context on how to read the data such as the _data type_, _starting offset_, _number of elements_ e.t.c. 

There are two types of buffers: _ArrayBuffer_ (Always owned by a single execution context at any point in time) and _SharedArrayBuffer_ (Can be owned by multiple execution contexts at different points in time)

There are two types of views: _Typed Array Views_ (Provides utility methods that allow convenient transformation of binary data.) and _DataView_ (more low-level and allows granular control of how data is accessed.)  

In order to learn more about how to work with Typed Arrays, check [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays#using_views_with_buffers)

### Set

Sets are data structures in which all stored elements must be unique.

Read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

### Map

In ES6, the _Map_ object has been introduced to replace the use of native javascript objects in certain use cases. So, I know that you must be wondering why you should use _Map_ in your code. To help you along, here are some ideas:

- **Accidental Keys:** This is important in situations where you're relying on user-input or some external source in order to determine the names of keys to use to save a certain value in code. In this case, using the native JS object could lead to a situation in which the name entered by the user overrides a default key/field within the object (This is because, objects in JS tend to have a prototype from which they inherit certain properties). This is not the case with _Map_ as there are no default keys present in the data structure at the point of creation.

- **Security:** This is similar to the point above. Essentially the ability to override default object keys/fields can lead to really serious security challenges down the line as users can pass in malicious code into your object which enable them remotely manipulate the code.

- **Key Types:** Key types in _Map_ can be either functions, objects or any of the primitive types.

- **Key Order:** Keys in a _Map_ are ordered according to the order of insertion.

- _The size of a Map can be retrieved through the use of it's builtin 'size' property. This is unlike native objects which do not provide interfaces for getting the size directly_.

- _Maps can be directly iterated over_

- _Maps are more performant in scenarios involving frequent additions and removals of key-value pairs_.

- _Maps do not provide native support for JSON serialization and deserialization_.

Read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

### Weak Map

The _Weak Map_ data structure from ES6 is a data structure which is essentially a collection of key/value pairs in which the values do not create a strong reference to their keys (Essentially, this means that the presence of an object in a Weak Map as a key does not prevent the Object from being garbage collected). The keys in a _Weak Map_ must be Objects or _non-registered Symbols_. While, the values can be of any arbitrary Javascript type.

The key of a Weak Map must be garbage-collectible. As such, primitive types cannot be used as keys in Weak Maps.

Here is a code displaying uses of Weak maps:

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = function () {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o2, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, because that is the set value
wm2.get(o3); // undefined, because there is no key for o3 on wm2

wm1.has(o2); // true
wm2.has(o2); // true (even if the value itself is 'undefined')
wm2.has(o3); // false

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false

```
Read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

WeakMaps have found application in the following use cases:
- Emulating private members
- Associating metadata
- Caching


# ES6 Array Iterator functions

### _map()_

### _filter()_

### _reduce()_