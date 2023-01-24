import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public iconBars = faBars;

  public activeMenu(){
    
    const menu = document.querySelector('#overlay-menu');
    menu?.classList.toggle('active');
    if(menu?.classList.contains('active')){
      this.iconBars = faClose;
    }else{
      this.iconBars = faBars;
    }

  }


}
