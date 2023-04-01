import {
  Component,
  ContentChild,
  TemplateRef,
  ElementRef,
  ViewChild,
  OnChanges,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay-panel.component.html',
  styleUrls: ['./overlay-panel.component.scss'],
})
export class OverlayPanelComponent implements OnChanges {
  @Input() dismissable = false;
  @ViewChild('open') open!: ElementRef;
  @ContentChild('content') content!: TemplateRef<any>;
  private body:any = document.querySelectorAll('body')[0];

  constructor(private readonly _elementRef: ElementRef<HTMLElement>) {}

  ngOnChanges(): void {
    this.isDismissable();
  }

  public toggle() {
    const overlay = this._elementRef.nativeElement.querySelector('#overlay');
    overlay?.classList.add('active');
  }

  private isDismissable(){
    if(this.dismissable){
      window.addEventListener('click',(event) => {
        if(event.target === this.body){
          const overlay = this._elementRef.nativeElement.querySelector('#overlay');
          overlay?.classList.remove('active');
        }
      })
    }
  }
}
