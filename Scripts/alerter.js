define(["require", "exports", "jquery", "dataservice"], function(require, exports, $, dataservice) {
    var name = "Bob";

    function showMessage() {
        var msg = dataservice.getMessage();

        $("#message").text(msg + ", " + name);
    }
    exports.showMessage = showMessage;
});
//# sourceMappingURL=alerter.js.map
