import { Component, OnInit } from '@angular/core';
import {IHouses, HousesService} from '../services/houses.service'
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})

export class HousesComponent implements OnInit {

  _houses: IHouses[];
  _pageNr: string = "3";
  _rows: string = "10";
  _name: string = "";
  _id:string="";
  _screenNr: number = 0;

  constructor(private service: HousesService) { }

  ngOnInit() {   
  }

  showList(pageNr: string, rows: string){
    this._pageNr = pageNr;
    this._rows=rows;
    this.service.getResources(this._pageNr,this._rows).subscribe(result => this._houses=result);
  }
  searchName(name: string){
    this._name = name;
    this.service.getName(this._name).subscribe(result => this._houses=result);
  }
  searchById(id: string){
    this._id = id;
    this.service.getId(this._id).subscribe(result => this._houses=result);
  }
  pageNr(input: string){
    if(input=='prev'){
      var x = parseInt(this._pageNr);
      x-=1;
      this._pageNr = x.toString();
      this.service.getResources(this._pageNr,this._rows).subscribe(result => this._houses=result);
    }
    else if(input=='next'){
      var x = parseInt(this._pageNr);
      x+=1;
      this._pageNr = x.toString();
      this.service.getResources(this._pageNr,this._rows).subscribe(result => this._houses=result);
    }
  }
  setScreen(screenNr: number){
    this._screenNr=screenNr;
  }

}

