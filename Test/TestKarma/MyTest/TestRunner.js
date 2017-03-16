/**
 * New node file
 */
var Mocha = require("mocha");
//var Reporter = require("./reporter");
var mocha = new Mocha({
    ui: "bdd",
//    reporter: "spec"
});
mocha.addFile("Test.js");
mocha.run();