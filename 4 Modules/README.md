## Keywords

### Key-Value Pair

### JavaScript Object

*   Any object in JS is a collection of key-value pairs.
*   Anything that is not a primitive type is an object.

Primitive types include string, null, undefined  
Objects include array, function  
`string` has temporary wrapper object, that let's you call methods like srt.toUpperCase(), but you can't assign key-value pairs like in objects with str.property = ‘value’

The value in key-value pair can be an object.  
You can add attributes to functions

```javascript
function greet() {
  console.log("Hello");
}

greet.language = "English";
```

### Object Literal

*   A concise way to define an object using curly braces

This is the typical way of writing objects in JS.  
Rarely used other methods include new Object(), ES6 Classes, etc.