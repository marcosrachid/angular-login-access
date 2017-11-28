import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

import { RegisterUserService } from '../_services';

import { TermsComponent } from '../_shared';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  private signupForm: FormGroup;
  private msgError: string;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar,
    private fb: FormBuilder, private router: Router,
    private translate: TranslateService, private registerUserService: RegisterUserService) {}

  ngOnInit() {
    this.createForm();
  }

  openTerms(): void {
    const dialogRef = this.dialog.open(TermsComponent, {
      width: '1000px'
    });
  }

  register(model: any, isValid: boolean) {
    if (isValid) {
      this.registerUserService.register(model.name, model.user, model.password)
      .subscribe(
        res => this.process(),
        error => this.msgError = `Err: ${error.message}`
      );
    } else {
      this.translate.getTranslation(localStorage['language'])
        .subscribe(
          res => this.msgError = res.signup.alert.invalid,
          error => console.log(error)
        );
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

  process() {
    this.translate.getTranslation(localStorage['language'])
      .subscribe(
        res => {
          this.snackBar.open(res.signup.alert.success, null, {
            duration: 2000
          });
        },
        error => console.log(error)
      );

    this.router.navigate(['/login']);
  }

  private createForm() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required ],
      user: ['',  Validators.compose([ Validators.required, Validators.email ]) ],
      password: ['', Validators.compose([ Validators.required, Validators.minLength(6) ]) ],
      repeat: ['', Validators.required ],
      terms: ['', Validators.requiredTrue ]
    },
    {
      validator: this.match
    });
  }

  private match(AC: AbstractControl) {
     let password = AC.get('password').value;
     let repeat = AC.get('repeat').value;
      if(password != repeat) {
          AC.get('repeat').setErrors( { match: true } )
      } else {
          return null
      }
  }

}
