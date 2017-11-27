import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

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
    private registerUserService: RegisterUserService) {}

  ngOnInit() {
    this.createForm();
  }

  openTerms(): void {
    let dialogRef = this.dialog.open(TermsComponent, {
      width: '1000px'
    });
  }

  register(model: any, isValid: boolean) {
    if (isValid) {
      this.registerUserService.register(model.name, model.user, model.password)
      .subscribe(
        data => this.process(),
        error => this.msgError = error.error.message
      );
    } else {
      this.msgError = 'signup.alert.invalid';
    }
  }

  process() {
      console.log('somehting');
      console.log(data);
      this.snackBar.open('signup.alert.success', null, {
        duration: 2000;
      });
      this.router.navigate(['/login']);
  }

  private createForm() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required ],
      user: ['',  Validators.compose([ Validators.required, Validators.email ]) ],
      password: ['', Validators.required ],
      repeat: ['', Validators.required ],
      terms: ['', Validators.requiredTrue ]
    });
  }

}
