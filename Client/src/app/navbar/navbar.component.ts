import{Component, OnInit} from "@angular/core";
import {AuthService} from '../services/auth.service'
@Component({
    selector:"app-navbar",
    templateUrl: "./navbar.component.html"
})

export class NavBarComponent implements OnInit{
    constructor(auth: AuthService){
        this.auth=auth;
    }
    ngOnInit(){}
    public auth: AuthService;
}