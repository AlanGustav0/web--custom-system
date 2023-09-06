import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[copyClipboard]',
})
export class CopyClipboardDirective {
  @Input('copyClipboard')
  public text = '';

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    event.preventDefault();

    if (!this.text) {
      return;
    }

    navigator.clipboard.writeText(this.text.toString());
  }
}
