##### What is Scope?
* Scope refers to the current context of your code- _where are you_?
* Can be global or local
* Helps you:
  * understand where functions are accessible
  * be able to change the scope of your code's context
  * be able to write faster & more maintainable code
  * debug faster

##### What is Global Scope?
* before you write a line of JS, you are in the _global_ scope
* When youd declare a variable, it is being defined globally (not inside of a function)
  * var whereAmI = 'global';

##### What is Local Scope?
* "inside" of the global scope
* Any scope defined past the global scope
* typically 1 global scope and each defined function has its own "nested" _local_ scope
  ```
  function local (){
    var whereAmINow = 'local';
  }
```
