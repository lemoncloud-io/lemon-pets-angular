import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  // check:boolean=false; 

  // myfunction(){
  //   if(this.check==false){
  //   this.check=true;
  //   }
  //   else{
  //   this.check=false;
  //   }
  //   }

}
