var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Label = (function (_super) {
        __extends(Label, _super);
        //Constructor
        function Label(labelString, fontFamily, fontColour, centered, x, y) {
            var _this = _super.call(this, labelString, fontFamily, fontColour) || this;
            _this.labelString = labelString;
            _this.fontFamily = fontFamily;
            _this.fontColour = fontColour;
            _this.centered = centered;
            _this.Start();
            _this.x = x;
            _this.y = y;
            return _this;
        }
        Label.prototype.Start = function () {
            if (this.centered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredLineHeight() * 0.5;
            }
        };
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map