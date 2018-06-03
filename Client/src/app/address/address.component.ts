import { Component, OnInit } from '@angular/core';
import {IAddresses, AddressService} from '../services/address.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})

export class AddressComponent implements OnInit {

  _addresses: IAddresses[]=[];
  _http: HttpClient;
  _address: IAddresses={
    
    postalCode:2000,
    city:"Bos",
    country:"Essos",
    number:2,
    street:"whatever"
  };
  constructor(private service: AddressService) { }

  ngOnInit() {
    
    this.service.getAddresses().subscribe(result => this._addresses=result)
  }
  postAddress(){
    this.service.postAddress(this._address).subscribe(address => this._address=address);
  }

}

