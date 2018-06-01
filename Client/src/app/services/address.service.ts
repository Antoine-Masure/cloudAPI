import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Response, Http, Headers, RequestOptions} from '@angular/http'

@Injectable()

export class AddressService{
    
    httpOptions ={
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    constructor(private _http: HttpClient){
        
    }
    getResources(): Observable<IAddresses[]>{

        return this._http.get<IAddresses[]>(`http://localhost:5000/api/v1/addresses`);      
    }
    postAddress(address: Object):Observable<IAddresses>{
        //this.headers = new HttpHeaders();
        //this.headers.set ('Content-Type', 'application/json');
        //let options = new RequestOptions({headers:headers})
        //let postBody = JSON.stringify(address);
        
        return this._http.post<IAddresses>(`http://localhost:5000/api/v1/addresses/`,address, this.httpOptions);
    }
}
export interface IAddresses {
    id?: number;
    postalCode: number;
    street: string;
    city: string;
    number: number;
    country: string;
    person?: any;
}