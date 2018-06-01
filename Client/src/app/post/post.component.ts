import { Component, OnInit } from '@angular/core';
import {IAddresses, AddressService} from '../services/address.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

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
    this.service.getResources().subscribe(result => this._addresses=result)
  }
  postRecord(){
    this.service.postAddress(this._address).subscribe(address => {this._addresses.push(this._address)});
  }

}

