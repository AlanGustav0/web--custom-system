import { Component, ContentChild, EventEmitter, Input, OnChanges, Output, TemplateRef } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnChanges{

  @Input() showOverlay!:boolean;
  @ContentChild('content')
  content!: TemplateRef<any>

  ngOnChanges(): void {
   this.toggle();

  }

  toggle(){
    let overlay = document.querySelector('#overlay');

    if(this.showOverlay){
      overlay?.classList.add('active');
    }else{
      overlay?.classList.remove('active');
    }
  }
}
