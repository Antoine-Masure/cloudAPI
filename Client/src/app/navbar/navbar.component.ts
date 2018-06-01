import{Component, OnInit} from "@angular/core";
import {AuthService} from '../services/auth.service'
@Component({
    selector:"app-navbar",
    templateUrl: "./navbar.component.html"
})

export class NavBarComponent implements OnInit{
    _auth: AuthService;
    constructor(auth: AuthService){
        this._auth=auth;
    }
    ngOnInit(){}
}