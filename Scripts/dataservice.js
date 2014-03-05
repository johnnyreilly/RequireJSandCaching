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
define(["require", "exports"], function(require, exports) {
    var msg = "Welcome to Code Camp";

    function getMessage() {
        return msg;
    }
    exports.getMessage = getMessage;
    ;
});
//# sourceMappingURL=dataservice.js.map
