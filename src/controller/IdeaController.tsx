import { Names } from "../data/Names";
import { Nouns } from "../data/Nouns";
import { Verbs } from "../data/Verbs";

export enum TypeOfIdea{
    Names,
    Nouns,
    Verbs,
    NA,
}

export default class IdeaController{
    _defaultText = '<Empty>';

    initLoad(){
        return this._defaultText;
    }

    generate(type: TypeOfIdea){
        switch(type){
            case TypeOfIdea.Verbs:
                return Verbs[Math.floor(Math.random() * Verbs.length - 1 )];
            case TypeOfIdea.Nouns:
                return Nouns[Math.floor(Math.random() * Nouns.length - 1 )];
            case TypeOfIdea.Names:
                return Names[Math.floor(Math.random() * Names.length - 1)];
            default:
                return 'a';
        }
    }

    generateNewIdeas({howMany = 1, initLoad = false} : {howMany: number, initLoad?: boolean}){
        const result : string[] = [];

        if( initLoad ){
            for( let i = 0; i < howMany; i++ ){
                result.push(this.initLoad());
            }
        } else {
            switch( howMany ){
                case 3:
                    result.push(this.generate(TypeOfIdea.Names));
                    result.push(this.generate(TypeOfIdea.Nouns));
                    result.push(this.generate(TypeOfIdea.Verbs));
                    break;
                case 2: 
                default: 
                    result.push(this.generate(TypeOfIdea.Names));
                    result.push(this.generate(TypeOfIdea.Verbs));
            }
        }

        return result;
    }
}