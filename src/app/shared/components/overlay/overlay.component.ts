import {
  Component,
  ContentChild,
  Input,
  OnChanges,
  Output,
  TemplateRef,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnChanges {
  @Input() showOverlay!: boolean;
  @ContentChild('content')
  content!: TemplateRef<any>;

  constructor(private readonly _elementRef: ElementRef<HTMLElement>) {}

  ngOnChanges(): void {
    this.toggle();
  }

  toggle() {
    let overlay = this._elementRef.nativeElement.querySelector('#overlay');

    if (this.showOverlay) {
      overlay?.classList.add('active');
    } else {
      overlay?.classList.remove('active');
    }
  }
}
