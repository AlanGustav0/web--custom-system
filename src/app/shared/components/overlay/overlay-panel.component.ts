import {
  Component,
  ContentChild,
  Input,
  OnChanges,
  TemplateRef,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay-panel.component.html',
  styleUrls: ['./overlay-panel.component.scss'],
})
export class OverlayPanelComponent implements OnChanges {
  @Input() showOverlay!: boolean;
  @ContentChild('content')
  content!: TemplateRef<any>;

  constructor(private readonly _elementRef: ElementRef<HTMLElement>) {}

  ngOnChanges(): void {
    this.toggle();
  }

  toggle() {
    const overlay = this._elementRef.nativeElement.querySelector('#overlay');

    if (this.showOverlay) {
      overlay?.classList.add('active');
    } else {
      overlay?.classList.remove('active');
    }
  }
}
