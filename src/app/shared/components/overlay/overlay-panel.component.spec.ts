import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPanelComponent } from './overlay-panel.component';

describe('OverlayPanelComponent', () => {
  let component: OverlayPanelComponent;
  let fixture: ComponentFixture<OverlayPanelComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${OverlayPanelComponent.prototype.ngOnChanges.name} should be called isDismissable`, () => {
    component.dismissable = true;
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`#${OverlayPanelComponent.prototype.toggle.name} should be set classList === active when it has been called`,() => {
    const overlay = fixture.nativeElement.querySelector('#overlay');
    component.toggle();
    expect(overlay.classList.contains('active')).toBe(true);

  });

  it(`#${OverlayPanelComponent.prototype.toggle.name} should not contains (active) in classList when it has been called`,() => {
    const body = document.querySelectorAll('body')[0];
    body.click();
    fixture.detectChanges();
    const overlay = fixture.nativeElement.querySelector('#overlay');
    expect(overlay.classList.contains('active')).toBe(false);

  });
});
