# Javascript series
This repository contains starter and final content for each of our JS-focused crash course events in Charlotte, NC. Note that this is finished code (not necessarily in the state where we finished in class), though we'll try to add comments to explain any important differences.

Links to specific sessions:
- [December 3, 2015 @ Packard Place](https://github.com/TIY-Charlotte-Frontend-Engineering/cc-javascript-series/tree/2015-12-03)
- [November 9, 2015 @ Packard Place](https://github.com/TIY-Charlotte-Frontend-Engineering/cc-javascript-series/tree/2015-11-09)
- [All](https://github.com/TIY-Charlotte-Frontend-Engineering/cc-javascript-series/branches)

To learn more about the Iron Yard in Charlotte, check out [our website](http://theironyard.com/locations/charlotte/) or [get in touch with us](mailto:wes@theironyard.com).

### Follow-ups
After attending a session, you may be interested in learning more about particular topics. Here are some links that can help you find more about topics we covered in class; generally speaking there's a ton of stuff available online for everything related to Javascript so feel free to dig around on your favorite search engine if these links don't do it for you. If there's anything you think would be good to add here, please let us know.

### Functions
A function is a specific set of computer instructions that can accept inputs and produce outputs. Functions are a critical part of almost all computer programs in the majority of popular languages. Here's a function to convert Fahrenheit temperatures to Celcius, written in Javascript:

```js
/**
 * You can name functions whatever you want; here I call it `fahr2cel` 
 * (short for "Fahrenheit to Celcius") but you can call it `fishtacos` 
 * if you want to. It's a good idea to give functions meaningful names 
 * so that it's clear what it's trying to do.
 *
 * This function accepts one input (called `fahr`), which is a 
 * temperature in Fahrenheit. It returns the equivalent temperature 
 * in Celcius, computed using the formula from:
 *   http://www.rapidtables.com/convert/temperature/how-fahrenheit-to-celsius.htm
 */
function fahr2cel(fahr) {
    return (fahr - 32) * 1.8;
}
```

Functions are an amazing tool for a bunch of reasons, but some particularly important ones include:

- They let us assign names (like `fahr2cel`) to a chunk of code to break things up into units based on what they do. This helps us keep things organized.
- They make it easy to reuse the same code in multiple places. If we ever want to change how something works (maybe we want to round the output temperature, for example), we only need to change it in one place: in the function.
- It's easier to test chunks of code that have expected inputs and outputs to make sure they do what they're supposed to do. Functions fit the bill perfectly!

### Map / filter / reduce
We went over three popular functions (`map`, `filter`, and `reduce`), all of which operates on lists of data.

- `map` is used for *transforming* elements of a list. For example, you could square all numbers in a list. The output list has the same number of elements but each will be transformed. For example:

    ```js
    var inputs = [1, 2, 8, 11];
    var squares = inputs.map(function(number) {
        return number * number;
    });
    
    // squares = [1, 4, 64, 121]
    // each value is the square of each of the original numbers
    ```
- `filter` is used for well...filtering certain elements out of a list based on whether they satisfy a particular condition. The output list contains a subset of the elements from the input list, but the elements are not transformed in any way. For example:

    ```js
    var inputs = [1, 5, 8, 11, 82];
    var big = inputs.map(function(number) {
        return number > 10;
    });
    
    // big = [11, 82]
    // numbers less than or equal to 10 are dropped
    ```

- `reduce` is used to combine a list of elements into a single value. Common ways to do this include adding or subtracting numbers, concatenating strings, or adding things to an array (list). Unlike `map` and `filter`, `reduce` needs a starting value in addition to a function provided as input. In this example, we're providing zero as that value:

    ```js
    var inputs = [1, 6, 3, 4];
    var sum = inputs.reduce(function (total, current) {
        return total + current;
    }, 0);
    
    // sum = 14
    // this can be read as 'starting from zero, add 'current' to the 
    // running `total` until all have been combined into a single value
    ```

[`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), and [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) are examples of "higher order functions", which are functions that accept other functions as inputs or produce them as outputs. For example, you pass a function to `map` to describe what sort of transform you want to apply to each element of the list.

There are a bunch of different higher order functions (you can even write your own!), and they're a popular and powerful technique in Javascript and some other popular languages. Map, filter, and reduce are some of the most well-known and broadly useful higher order functions.

### EOP library
EOP (Eye of Providence) is a library I cooked up for the purpose of explaining function compositions (how data changes as it passes from one function to another). It's still very young, but it's also written in Javascript! You can find it [here](https://github.com/anyweez/eop) if you're interested in learning more, and you can include [https://rawgit.com/anyweez/eop/master/eop.js](https://rawgit.com/anyweez/eop/master/eop.js) in any HTML file to get access to the `eop()` function used during class. 

See `functions.html` and `functions.js` for an example of how to include and use it.