import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class CharacterService{
    _stringName: string = "";
    constructor(private _http: HttpClient){}
    getResources(page: string, rows: string): Observable<ICharacters[]>{

            return this._http.get<ICharacters[]>(`https://www.anapioficeandfire.com/api/characters?page=${page}&pagesize=${rows}`);
    }
    getName(string, name:string): Observable<ICharacters[]>{
        this._stringName = name.replace(" ","+");
        console.log(this._stringName);
        
        return this._http.get<ICharacters[]>(`https://www.anapioficeandfire.com/api/characters?name=${this._stringName}`)
    }
    getId(id:string): Observable<ICharacters[]>{
        return this._http.get<ICharacters[]>(`https://www.anapioficeandfire.com/api/characters/${id}`)
    }
}
export interface ICharacters {
    url: string;
    name: string;
    gender: string;
    culture: string;
    born: string;
    died: string;
    titles: string[];
    aliases: string[];
    father: string;
    mother: string;
    spouse: string;
    allegiances: any[];
    books: string[];
    povBooks: any[];
    tvSeries: string[];
    playedBy: string[];
  }
  export interface IHouses {
    url: string;
    name: string;
    region: string;
    coatOfArms: string;
    words: string;
    titles: string[];
    seats: string[];
    currentLord: string;
    heir: string;
    overlord: string;
    founded: string;
    founder: string;
    diedOut: string;
    ancestralWeapons: string[];
    cadetBranches: string[];
    swornMembers: string[];
}
