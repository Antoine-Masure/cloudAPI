import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Response, Http, Headers, RequestOptions} from '@angular/http'

@Injectable()

export class PeopleService{
    constructor(private _http: HttpClient){
        
    }
    
    getPeople(): Observable<IPeople[]>{

        return this._http.get<IPeople[]>(`http://localhost:5000/api/v1/people`);      
    }
    postPerson(person: Object):Observable<IPeople>{
        let headers = new HttpHeaders();
        headers.set ('Content-Type', 'application/json; charset=utf-8')
        return this._http.post<IPeople>(`http://localhost:5000/api/v1/people`,person,{headers:headers});
    }
    
}
export interface IPeople {
    id?: number,
    firstName: string,
    lastName: string;
}