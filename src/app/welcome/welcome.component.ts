import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    const $html = document.querySelector('body');
    const $checkbox = document.querySelector('#switch');

    $checkbox?.addEventListener('change',  () => {
      $html?.classList.toggle('dark-theme');
      if($html?.classList.contains('dark-theme')){
        this.formImage = FormThems.FORM_DARK_THEME;
      }else{
        this.formImage = FormThems.FORM_DEFAULT;
      }
    });
  }
}
