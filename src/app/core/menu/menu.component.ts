import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { Logout } from '../ngxs/app.actions';
import { Subject, takeUntil } from 'rxjs';
import { AppSelectors } from '../ngxs/app.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  public iconBars = faBars;
  public showOverlay = false;
  public userName = 'Nome do Usuário';
  private overlayMenu: any;
  private _unsub$ = new Subject<void>();

  constructor(
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _store: Store
  ) {}

  ngOnInit(): void {
    this._store
    .select(AppSelectors.selectUser())
    .pipe(takeUntil(this._unsub$))
    .subscribe((user) => {
      if (user) {
        this.userName = user.userName;
      }
    });
  }

  public activeMenu() {
    this.overlayMenu =
      this._elementRef.nativeElement.querySelector('#overlay-menu');
    this.overlayMenu?.classList.toggle('active');

    this.setMenuIcon();
  }

  logout() {
    this._store.dispatch(new Logout());
  }

  ngOnDestroy(): void {
    this._unsub$.next();
    this._unsub$.complete();
  }

  private setMenuIcon() {
    if (this.overlayMenu?.classList.contains('active')) {
      this.iconBars = faClose;
    } else {
      this.iconBars = faBars;
    }
  }
}
