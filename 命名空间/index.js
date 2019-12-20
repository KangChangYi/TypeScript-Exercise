"use strict";
// 命名空间是位于全局命名空间下的一个普通的带有名字的JavaScript对象。 这令命名空间十分容易使用。 
// 命名空间中经过导出的才可以在外部使用
var Person;
(function (Person) {
    var personName = 'kcy';
})(Person || (Person = {}));
// 可以在多文件下也对同一命名空间添加内容，需要使用标签
// <reference path="Validation.ts" />  和  --outFile 指令
var myName = '123';
