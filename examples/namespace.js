/* Generated by Iode v0.0.1 */

var Main;
(function(Main) {
  var Greeter = (function() {
    function Greeter(name, age) {
      this.name = name;
      this.age = age;
      this.name = "John";
    }
    Greeter.prototype.hello = function() {
      console.log("Cool! Hey " + name + "! You're " + age + "!");
    };
    return Greeter;
  })();
  Main.Greeter = Greeter;
})(Main || (Main = {}));