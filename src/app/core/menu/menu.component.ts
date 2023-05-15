import { Component, ElementRef } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { Logout } from '../ngxs/app.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public iconBars = faBars;
  public showOverlay = false;
  private overlayMenu: any;

  constructor(
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _store: Store
  ) {}

  public activeMenu() {
    this.overlayMenu =
      this._elementRef.nativeElement.querySelector('#overlay-menu');
    this.overlayMenu?.classList.toggle('active');

    this.setMenuIcon();
  }

  logout() {
    this._store.dispatch(new Logout());
  }

  private setMenuIcon() {
    if (this.overlayMenu?.classList.contains('active')) {
      this.iconBars = faClose;
    } else {
      this.iconBars = faBars;
    }
  }
}
