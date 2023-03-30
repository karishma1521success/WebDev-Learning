// closures in js gives you an access of an outer function's scope to inner function.
// In javscript closures are created everytime a function is created, at function creation time
/**
 * function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
 */ 