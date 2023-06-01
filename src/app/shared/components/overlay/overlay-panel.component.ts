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

  private body: any = document.querySelectorAll('body')[0];

  constructor(private readonly _elementRef: ElementRef<HTMLElement>) {}

  ngOnChanges(): void {
    this.isDismissable();
  }

  public toggle(event: any) {
    const overlay: HTMLElement | null =
      this._elementRef.nativeElement.querySelector('#overlay');
    if (overlay) {
      overlay.classList.add('active');
      const position = event.target.clientHeight;
      overlay.style.top = position + 30 + 'px';
    }
  }

  private isDismissable() {
    if (this.dismissable) {
      window.addEventListener('click', (event) => {
        if (event.target === this.body) {
          const overlay =
            this._elementRef.nativeElement.querySelector('#overlay');
          overlay?.classList.remove('active');
        }
      });
    }
  }
}
