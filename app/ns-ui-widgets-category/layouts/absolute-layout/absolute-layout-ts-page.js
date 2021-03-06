"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var absolute_layout_1 = require("tns-core-modules/ui/layouts/absolute-layout");
var _1 = require("tns-core-modules/ui/button/");
var _2 = require("tns-core-modules/color/");
function onNavigatingTo(args) {
    var page = args.object;
    var stack = page.getViewById("stack");
    var absoluteLayout = new absolute_layout_1.AbsoluteLayout();
    var button1 = new _1.Button();
    button1.text = "Left: 10, Top: 5";
    button1.backgroundColor = "#0099CC";
    var button2 = new _1.Button();
    button2.text = "Left: 30, Top: 80";
    button2.backgroundColor = "#C3C3E5";
    var button3 = new _1.Button();
    button3.text = "Left: 150, Top: 25";
    button3.backgroundColor = "#CCFFFF";
    var button4 = new _1.Button();
    button4.text = "Left: 70, Top: 150";
    button4.backgroundColor = "#8C489F";
    button4.color = new _2.Color("lightgray");
    absoluteLayout.addChild(button1);
    absoluteLayout.addChild(button2);
    absoluteLayout.addChild(button3);
    absoluteLayout.addChild(button4);
    absolute_layout_1.AbsoluteLayout.setLeft(button1, 10);
    absolute_layout_1.AbsoluteLayout.setTop(button1, 5);
    absolute_layout_1.AbsoluteLayout.setLeft(button2, 30);
    absolute_layout_1.AbsoluteLayout.setTop(button2, 80);
    absolute_layout_1.AbsoluteLayout.setLeft(button3, 150);
    absolute_layout_1.AbsoluteLayout.setTop(button3, 25);
    absolute_layout_1.AbsoluteLayout.setLeft(button4, 70);
    absolute_layout_1.AbsoluteLayout.setTop(button4, 150);
    stack.removeChildren();
    stack.addChild(absoluteLayout);
}
exports.onNavigatingTo = onNavigatingTo;
