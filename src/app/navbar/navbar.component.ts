import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  check:boolean=false; 


  myfunction(){
    if(this.check==false){
    this.check=true;
    }
    else{
    this.check=false;
    }
    }
  
}
