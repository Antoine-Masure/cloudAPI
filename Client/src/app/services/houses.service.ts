import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class HousesService{
    _stringName: string = "";
    constructor(private _http: HttpClient){}
    getResources(page: string, rows: string): Observable<IHouses[]>{

            return this._http.get<IHouses[]>(`https://www.anapioficeandfire.com/api/houses?page=${page}&pagesize=${rows}`);
    }
    getName(name:string): Observable<IHouses[]>{
        this._stringName = name.replace(" ","+");
        console.log(this._stringName);
        
        return this._http.get<IHouses[]>(`https://www.anapioficeandfire.com/api/houses?name=${this._stringName}`)
    }
    getId(id:string): Observable<IHouses[]>{
        return this._http.get<IHouses[]>(`https://www.anapioficeandfire.com/api/houses/${id}`)
    }
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
