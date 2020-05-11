class Logic {
    constructor(private data : string){}
    
    printIndexesAndOccurencesOfCharInData(char:string){
        let noOfOccurences = 0;
        this.data.split("").forEach((v, i) => {
            if(v === char){
                console.log(`${char} occured at index ${i}`);
                noOfOccurences+=1;
            }
        })
        console.log(`Total number of occurences of ${char} is : ${noOfOccurences}`)
    }
    getNumberOfStatementsInData(): Number{
        let noOfStatements = 0;
        this.data.split("").forEach((v) => {
            if(v === ".")
                noOfStatements+=1;
        })
        return noOfStatements;
    }

    convertFirstCharacterOfStatementsInUpperCase():void {
        let dataArray = this.data.split("");
        dataArray[0] = dataArray[0].toUpperCase();
        dataArray.forEach((v, i) => {
            if(v === "." && i + 2 < dataArray.length)
                dataArray[i+2] = dataArray[i+2].toUpperCase();
        })

        this.data = dataArray.join("");
    }
    printData(): void {
        console.log(this.data);
    }
}

let logic = new Logic("everything changed about 2 years ago. it was when I used TypeScript for the first time. However, I hadn’t fell in love with it from the beginning. in the first few days it was actually annoying me. situation changed quickly though.");

logic.printIndexesAndOccurencesOfCharInData("a");
console.log();
console.log(`Number of statements in data : ${logic.getNumberOfStatementsInData()}`)
console.log();
logic.convertFirstCharacterOfStatementsInUpperCase();
logic.printData();