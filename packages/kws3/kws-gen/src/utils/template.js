var ejs = require("ejs");
function render(content, data) {
    return ejs.render(content, data);
}
exports.render = render;