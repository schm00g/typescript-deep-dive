function basics(){
    // Beyond literals, any Object in JavaScript 
    // (including functions, arrays, regexp etc) are references. 
    // mutations are across all references

    const foo = {};
    const bar = foo;
    foo.baz = 123;
    console.log(bar);

    // equality is for references
    const baz = {};
    console.log(foo === bar); // true
    console.log(foo === baz); // false

    // JavaScript (and by extension TypeScript) has two bottom types:
    // null and undefined. They are intended to mean different things:
    // something hasn't been initialized -> undefined
    // something is currently unavailable -> null
    // Both null and undefined are only `==` to themselves and each other:
    console.log(null == null); // true (of course)
    console.log(undefined == undefined); // true (of course)
    console.log(null == undefined); // true


    // You don't have to worry about falsy values making through this check
    console.log(0 == undefined); // false
    console.log('' == undefined); // false
    console.log(false == undefined); // false
}

basics();