/*
define('alerter',
    ['jquery', 'dataservice'],
    function ($, dataservice) {

        var
            name = 'John',
            showMessage = function () {
                var msg = dataservice.getMessage();
                //alert(msg + ', ' + name);
                $('#message').text(msg + ', ' + name);
            };

        return {
            showMessage: showMessage
        };
    });
*/
import $ = require("jquery");
import dataservice = require("dataservice");

var name = "Bob";

export function showMessage() {

    var msg = dataservice.getMessage();

    $("#message").text(msg + ", " + name);
}
