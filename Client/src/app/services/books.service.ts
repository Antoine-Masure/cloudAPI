import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class BookService{
    _stringName: string = "";
    constructor(private _http: HttpClient){}
    getBooks(page: string, rows: string): Observable<IBooks[]>{

            return this._http.get<IBooks[]>(`https://www.anapioficeandfire.com/api/books?page=${page}&pagesize=${rows}`);
    }
    getName(name:string): Observable<IBooks[]>{
        this._stringName = name.replace(" ","+");
        console.log(this._stringName);
        
        return this._http.get<IBooks[]>(`https://www.anapioficeandfire.com/api/books?name=${this._stringName}`)
    }
    getId(id:string): Observable<IBooks[]>{
        return this._http.get<IBooks[]>(`https://www.anapioficeandfire.com/api/books/${id}`)
    }
}
export interface IBooks {
    url: string;
    name: string;
    isbn: string;
    authors: string[];
    numberOfPages: number;
    publisher: string;
    country: string;
    mediaType: string;
    released: Date;
    characters: string[];
    povCharacters: string[];
}
