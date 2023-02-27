import { Component, OnInit, ElementRef } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

const FormThems = {
  FORM_DEFAULT: './../../assets/images/forms.svg',
  FORM_DARK_THEME: './../../assets/images/forms_dark-theme.svg',
};

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  public formImage = FormThems.FORM_DEFAULT;

  options: AnimationOptions = {
    path:'./../../assets/lottie/hello.json'
  }

  constructor(private readonly _elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.changeTheme();
  }

  changeTheme(){
    const htmlElement = this._elementRef.nativeElement.querySelector('body');
    const checkboxElement = this._elementRef.nativeElement.querySelector('#switch');
    checkboxElement?.addEventListener('change', () => {
      htmlElement?.classList.toggle('dark-theme');
      if (htmlElement?.classList.contains('dark-theme')) {
        this.formImage = FormThems.FORM_DARK_THEME;
      } else {
        this.formImage = FormThems.FORM_DEFAULT;
      }
    });
  }
}
