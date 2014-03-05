/*
define('dataservice', [],
    function () {
        var
            msg = 'Welcome to Code Camp',
            getMessage = function () {
                return msg;
            };

        return {
            getMessage: getMessage
        };
    });
*/

var msg = "Welcome to Code Camp";

export function getMessage() {

    return msg;
};
