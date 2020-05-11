"use strict";
exports.__esModule = true;
var language_1 = require("./language");
var Logic = /** @class */ (function () {
    function Logic() {
        this.languages = new Array();
    }
    Logic.prototype.getLanguages = function () {
        return this.languages;
    };
    Logic.prototype.addLanguage = function (language) {
        this.languages.push(language);
        return this.languages;
    };
    Logic.prototype.sortByLengthAndReverseData = function () {
        this.languages.sort(function (a, b) {
            if (a.name.length < b.name.length)
                return -1;
            else if (a.name.length > b.name.length)
                return 1;
            return 0;
        });
        this.reverseData();
        return this.languages;
    };
    Logic.prototype.printLanguageNames = function () {
        this.languages.forEach(function (language, i) {
            console.log(language.name);
        });
    };
    Logic.prototype.reverseData = function () {
        this.languages.forEach(function (language, i) {
            language.name = language.name.split("").reverse().join("");
        });
    };
    return Logic;
}());
var logic = new Logic();
logic.addLanguage(new language_1.Language("javascript"));
logic.addLanguage(new language_1.Language("perl"));
logic.addLanguage(new language_1.Language("python"));
logic.addLanguage(new language_1.Language("csharp"));
logic.addLanguage(new language_1.Language("java"));
logic.sortByLengthAndReverseData();
var langs = logic.getLanguages();
langs = new Array();
logic.printLanguageNames();
