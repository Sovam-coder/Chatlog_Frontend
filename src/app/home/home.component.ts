import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('name') namekey!:ElementRef;
  isshow:boolean=false;
  public printname:any=localStorage.getItem("name");
  
  constructor() { }

  ngOnInit(): void {
  
     const name = localStorage.getItem('name');
    if(!name)
    {
      localStorage.setItem("name","");
    }
    if(localStorage.getItem("name")!="")
    {
    // localStorage.setItem("name",this.namekey.nativeElement.value);
    this.isshow=true;
    }
    
    
  }
  logout()
  {
    localStorage.setItem("name","");
    window.location.reload()
  }
  startchat()
  {
    localStorage.setItem("name",this.namekey.nativeElement.value);
    
    
  }
  
}
