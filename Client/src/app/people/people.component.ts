import { Component, OnInit } from '@angular/core';
import {IPeople,PeopleService} from '../services/people.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent implements OnInit {

  _people: IPeople[]=[];
  _http: HttpClient;
  _person: IPeople;
  constructor(private service: PeopleService) { }

  ngOnInit() {
    
    this.service.getPeople().subscribe(result => this._people=result)
  }
  postAddress(){
    this.service.postPerson(this._people).subscribe(address => this._person=address);
  }

}


