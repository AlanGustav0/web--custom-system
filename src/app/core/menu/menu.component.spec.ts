import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayPanelModule } from 'src/app/shared/components/overlay/overlay-panel.module';
import { Router } from '@angular/router';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports:[FontAwesomeModule,OverlayPanelModule]
    })
    .compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${MenuComponent.prototype.activeMenu.name} should be set style (active) in overlayMenu when it has been called)`,() => {
    const icon = fixture.nativeElement.querySelector('.nav__container__menu-mobile__icon');
    const overlayMenu = fixture.nativeElement.querySelector('#overlay-menu');
    icon.click();
    fixture.detectChanges();
    expect(overlayMenu.classList.contains('active')).toBe(true);
  });

  it(`#${MenuComponent.prototype.activeMenu.name} should be set faBars in iconBars when it has been called`,() => {
    const icon = fixture.nativeElement.querySelector('.nav__container__menu-mobile__icon');
    icon.click();
    fixture.detectChanges();
    icon.click();
    expect(component.iconBars.iconName).toEqual('bars');
  });

  it(`#${MenuComponent.prototype.logout.name} should be navigate to (/boas-vindas) when it has been called`,() => {
    const spyRouter = spyOn(router,'navigate');
    const logoutButton = fixture.nativeElement.querySelector('#logout');
    logoutButton.click();
    fixture.detectChanges();
    expect(spyRouter).toHaveBeenCalledWith(['/boas-vindas']);
  });
});
