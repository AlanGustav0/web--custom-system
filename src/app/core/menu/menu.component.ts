import { UserService } from './../services/user/user.service';
import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public iconBars = faBars;
  public showOverlay = false;
  private overlayMenu:any;

  constructor(
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _userService: UserService,
    private readonly _router: Router
  ) {}

  public activeMenu() {
    this.overlayMenu = this._elementRef.nativeElement.querySelector('#overlay-menu');
    this.overlayMenu?.classList.toggle('active');

    this.setMenuIcon();
  }


  logout() {
    this._userService.logout();
    this._router.navigate(['/welcome']);
  }

  private setMenuIcon(){
    if (this.overlayMenu?.classList.contains('active')) {
      this.iconBars = faClose;
    } else {
      this.iconBars = faBars;
    }
  }
}
