import { Language } from "./language";

class Logic {
    private languages : Array<Language>
    constructor(){
        this.languages = new Array<Language>();
    }
    getLanguages() : Array<Language>{
        return this.languages;
    }
    addLanguage(language : Language) : Array<Language>{
        this.languages.push(language);
        return this.languages;
    }
    sortByLengthAndReverseLanguageNames(): Array<Language>
    {
        this.languages.sort((a:Language, b:Language) => {
            if(a.name.length < b.name.length)
                return -1;
            else if(a.name.length > b.name.length)
                return 1;
            return 0;
        }) 
        
        this.reverseLanguageNames();
        
        return this.languages
    }
    printLanguageNames():void {
        this.languages.forEach((language, i) => {
            console.log(language.name)
        })
    }
    private reverseLanguageNames() : void{
        this.languages.forEach((language:Language, i: number) => {
            language.name = language.name.split("").reverse().join("")
        })
    }
}

let logic = new Logic()

logic.addLanguage(new Language("javascript"));
logic.addLanguage(new Language("perl"));
logic.addLanguage(new Language("python"));
logic.addLanguage(new Language("csharp"));
logic.addLanguage(new Language("java"));

logic.sortByLengthAndReverseLanguageNames();

logic.printLanguageNames();