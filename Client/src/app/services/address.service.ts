import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Response, Http, Headers, RequestOptions} from '@angular/http'

@Injectable()

export class AddressService{
    constructor(private _http: HttpClient){
        
    }
    
    getAddresses(): Observable<IAddresses[]>{

        return this._http.get<IAddresses[]>(`http://localhost:5000/api/v1/addresses`);      
    }
    postAddress(address: Object):Observable<IAddresses>{
        let headers = new HttpHeaders();
        headers.set ('Content-Type', 'application/json; charset=utf-8')
        return this._http.post<IAddresses>(`http://localhost:5000/api/v1/addresses`,address,{headers:headers});
    }
    
}
export interface IAddresses {
    
    postalCode: number;
    street: string;
    city: string;
    number: number;
    country: string;
    person?: any;
}