/**
 * Created by Pradeep Kumar S on 05/10/16.
 */
var Backbone = require("backbone");
module.exports = function(){
    var element = document.createElement('h1');
    element.innerHTML = 'Hello world';
    var model = new Backbone.Model({});
    return element;
};
