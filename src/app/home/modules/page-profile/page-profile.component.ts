import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Subject, takeUntil } from 'rxjs';
import { AppSelectors } from './../../../core/ngxs/app.selectors';
import { UserService } from 'src/app/core/services/user/user.service';
import { environment } from 'src/environments/environments';
import { UserProfileRequest } from 'src/app/core/services/interfaces/request/user-profile-request.interface';
import { UserResponse } from 'src/app/core/services/interfaces/response/user-response.interface';

const URL_IMAGE = `${environment.baseUrl}`;

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.scss'],
})
export class PageProfileComponent implements OnInit, OnDestroy {
  public profileForm!: FormGroup;
  private _unsub$ = new Subject<void>();
  public image = '../../../../assets/icons/icon-user.svg';
  public file!: any;
  public profileId!: number;
  public preview!: string;
  public user!:UserResponse;

  constructor(
    private readonly _store: Store,
    private readonly _formBuilder: FormBuilder,
    private readonly _userService: UserService,
  ) {}


  ngOnInit(): void {
    this._store
      .select(AppSelectors.selectUser())
      .pipe(takeUntil(this._unsub$))
      .subscribe((user) => {
        if (user) {
          this.user = {...user};
          this.image = `${URL_IMAGE + this.user.imageProfile}`
        }
      });

    this.profileForm = this._formBuilder.group({
      name: [''],
      email: [''],
      address: [''],
      file: [''],
    });
    this.profileId = this.user.userProfileId;
    this.getUserProfile(this.profileId);


  }


  handlefile(target: any) {
    const element = target as HTMLInputElement;
    const file = element.files;
    this.file = file;
    const fileReader = new FileReader();

    if (file) {
      fileReader.onloadend = (event: any) => {
        this.preview = event.target.result;
      };
      fileReader.readAsDataURL(file[0]);
    }
  }

  onSubmit() {
    const request: UserProfileRequest = {
      userName: this.profileForm.get('name')?.value,
      email: this.profileForm.get('email')?.value,
      endereco: this.profileForm.get('address')?.value,
      id: this.profileId,
    };

    this._userService
      .updateUserProfile(request)
      .pipe(takeUntil(this._unsub$))
      .subscribe({
        next: (response) => {
          if (response) {
            console.log(response);
          }
        },
        error: () => {
          console.log('erro');
        },
        complete: () => {
          this.getUserProfile(this.profileId);
        },
      });
  }

  ngOnDestroy(): void {
    this._unsub$.next();
    this._unsub$.complete();
  }

  private getUserProfile(id: number) {
    this._userService
      .getUserProfile(id)
      .pipe(takeUntil(this._unsub$))
      .subscribe({
        next: (response) => {
          if(response)
          this.profileForm.patchValue({
            name: response.userName,
            email: response.email,
            address: response.endereco,
          });

        },
        error: () => {
          console.log('Erro');
        },
      });
  }
}
