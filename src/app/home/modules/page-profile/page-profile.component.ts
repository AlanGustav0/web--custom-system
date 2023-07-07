import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Subject, takeUntil } from 'rxjs';
import { AppSelectors } from './../../../core/ngxs/app.selectors';
import { UserService } from 'src/app/core/services/user/user.service';
import { environment } from 'src/environments/environments';
import { UserProfileRequest } from 'src/app/core/services/interfaces/request/user-profile-request.interface';
import { UserResponse } from 'src/app/core/services/interfaces/response/user-response.interface';
import { ProfileData } from 'src/app/core/services/interfaces/request/profile-data-request.interface';
import { UpdateUser, UpdateUserError, UpdateUserProfile } from 'src/app/core/ngxs/app.actions';

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
  public profileUpdated = false;
  public imageProfileUpdated = false;
  public user!: UserResponse;

  constructor(
    private readonly _store: Store,
    private readonly _formBuilder: FormBuilder,
    private readonly _userService: UserService
  ) {}

  ngOnInit(): void {
    this._store
      .select(AppSelectors.selectUser())
      .pipe(takeUntil(this._unsub$))
      .subscribe((user) => {
        if (user) {
          this.user = { ...user };
          this.image = this.user.imageProfile ? `${URL_IMAGE + this.user.imageProfile}` : this.image;
        }
      });

    this.profileForm = this._formBuilder.group({
      name: [''],
      email: [''],
      address: [''],
      numero: [''],
      city: [''],
      state: [''],
      cep: [''],
      file: [''],
    });
    this.profileId = this.user.userProfileId;
    this.getUserProfile(this.profileId);
  }

  handleFile(target: any) {
    const element = target as HTMLInputElement;
    const file = element.files;
    this.file = file;
    const fileReader = new FileReader();

    if (file) {
      fileReader.onloadend = (event: any) => {
        this.preview = event.target.result;
      };
      fileReader.readAsDataURL(file[0]);
      this.updateImageProfile(file[0], this.user.id);
    }
  }

  onSubmit() {
    const request: UserProfileRequest = {
      userName: this.profileForm.get('name')?.value,
      email: this.profileForm.get('email')?.value,
      endereco: this.profileForm.get('address')?.value,
      numero: this.profileForm.get('numero')?.value,
      cidade: this.profileForm.get('city')?.value,
      estado: this.profileForm.get('state')?.value,
      cep: this.profileForm.get('cep')?.value,
      id: this.profileId,
    };

    this._userService
      .updateUserProfile(request)
      .pipe(takeUntil(this._unsub$))
      .subscribe({
        next:() => {
          this.getUserProfile(this.profileId);
          this.profileUpdated = true;
        },
        error: () => {
          this._store.dispatch(new UpdateUserError());
        },
        complete:() => {
          setTimeout(() => {
            this.profileUpdated = false;
          },2000);
        }
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
          if (response)
            this.profileForm.patchValue({
              name: response.userName,
              email: response.email,
              address: response.endereco,
              numero:response.numero,
              city:response.cidade,
              state:response.estado,
              cep:response.cep
            });
            this._store.dispatch(new UpdateUserProfile(this.profileId));
        },
        error: () => {
          console.log('Erro');
        },
      });
  }

  private updateImageProfile(file: any, id: number) {
    const request: ProfileData = {
      file:file,
      id:id
    }
    this._userService
      .updateImageProfile(request)
      .pipe(takeUntil(this._unsub$))
      .subscribe({
        next: () => {
          this._store.dispatch(new UpdateUser(this.user.id));
          this.imageProfileUpdated = true;
        },
        error: () => {
          this._store.dispatch(new UpdateUserError());
        },
        complete:() => {
          setTimeout(() => {
            this.imageProfileUpdated = false;
          },2000);
        }
      });
  }
}
