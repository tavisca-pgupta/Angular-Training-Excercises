var Logic = /** @class */ (function () {
    function Logic(data) {
        this.data = data;
    }
    Logic.prototype.printIndexesAndOccurencesOfCharInData = function (char) {
        var noOfOccurences = 0;
        this.data.split("").forEach(function (v, i) {
            if (v === char) {
                console.log(char + " occured at index " + i);
                noOfOccurences += 1;
            }
        });
        console.log("Total number of occurences of " + char + " is : " + noOfOccurences);
    };
    Logic.prototype.getNumberOfStatementsInData = function () {
        var noOfStatements = 0;
        this.data.split("").forEach(function (v) {
            if (v === ".")
                noOfStatements += 1;
        });
        return noOfStatements;
    };
    Logic.prototype.convertFirstCharacterOfStatementsInUpperCase = function () {
        var dataArray = this.data.split("");
        dataArray[0] = dataArray[0].toUpperCase();
        dataArray.forEach(function (v, i) {
            if (v === "." && i + 2 < dataArray.length)
                dataArray[i + 2] = dataArray[i + 2].toUpperCase();
        });
        this.data = dataArray.join("");
    };
    Logic.prototype.printData = function () {
        console.log(this.data);
    };
    return Logic;
}());
var logic = new Logic("everything changed about 2 years ago. it was when I used TypeScript for the first time. However, i hadn’t fell in love with it from the beginning. in the first few days it was actually annoying me. situation changed quickly though.");
logic.printIndexesAndOccurencesOfCharInData("a");
console.log();
console.log("Number of statements in data : " + logic.getNumberOfStatementsInData());
console.log();
logic.convertFirstCharacterOfStatementsInUpperCase();
logic.printData();
