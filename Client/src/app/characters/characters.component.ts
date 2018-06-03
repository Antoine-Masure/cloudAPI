import { Component, OnInit } from '@angular/core';
import {CharacterService, ICharacters} from '../services/characters.service'
import { ResourceLoader } from '@angular/compiler';
import { variable } from '@angular/compiler/src/output/output_ast';
import {HousesService, IHouses} from '../services/houses.service'
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  _character: ICharacters[]=[];
  _resource:string = "characters";
  _pageNr: string = "3";
  _rows: string = "10";
  _name: string = "";
  _id:string="";
  _screenNr: number = 0;
 // _house: IHouses[];
  constructor(private service: CharacterService, private _hservice: HousesService) { }

  ngOnInit() { 
      
  }

  showList(pageNr: string, rows: string){
    this._pageNr = pageNr;
    this._rows=rows;
    this.service.getCharacters(this._pageNr,this._rows).subscribe(result => this._character=result);
  }
  searchName(name: string){
    this._name = name;
    this.service.getName(this._resource, this._name).subscribe(result => this._character=result);
  }
  searchById(id: string){
    this._id = id;
    this.service.getId(this._id).subscribe(result => this._character=result);
  }
  pageNr(input: string){
    if(input=='prev'){
      var x = parseInt(this._pageNr);
      x-=1;
      this._pageNr = x.toString();
      this.service.getCharacters(this._pageNr,this._rows).subscribe(result => this._character=result);
    }
    else if(input=='next'){
      var x = parseInt(this._pageNr);
      x+=1;
      this._pageNr = x.toString();
      this.service.getCharacters(this._pageNr,this._rows).subscribe(result => this._character=result);
    }
  }
 // showHouses(){   
  //  var str = this._character[0].allegiances;
   // str.forEach(element => {
   //   var temp = element.toString().substr(0, element.lastIndexOf("/")+1);  
   //  this._hservice.getId(temp).subscribe(result => this._house = result);
    //  this._character[0].allegiances=this._house;
   // });
    
 //}
  setScreen(screenNr: number){
    this._screenNr=screenNr;
  }
}
