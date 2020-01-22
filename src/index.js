const $ = require('jquery');

let sayHello = () => {
    console.log('Hello');
};
sayHello();

$(document).ready(function() {
        $('body').html(`<h1>Hello</h1>`);
        console.log("ready!");
});