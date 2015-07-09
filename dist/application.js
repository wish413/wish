define("src/application/application", [ "./util", "./jquery-demo", "jquery" ], function(require, exports, module) {
    var util = require("./util");
    alert("hello seajs");
});

define("src/application/jquery-demo", [ "jquery" ], function(require, exports, module) {
    var $ = require("jquery");
    $("#container").append("<p>JQuery 引入成功！<p>");
});

define("src/application/util", [ "./jquery-demo", "jquery" ], function(require, exports, module) {
    require("./jquery-demo");
    var util = {};
    alert("are you ready!!");
    module.exports = util;
});
