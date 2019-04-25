import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { FailedComponent } from './failed/failed.component';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  enteredForm: FormGroup;

  constructor(
    public authService: AuthService,
    public router: Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.initForms();

  }
  initForms() {
    this.enteredForm = new FormGroup({
      username: new FormControl(this.authService.username, [Validators.required]),
      password: new FormControl(this.authService.password, [Validators.required])
    });
    this.enteredForm.valueChanges.subscribe(form => {
      this.authService.username = this.enteredForm.controls['username'].value;
      this.authService.password = this.enteredForm.controls['password'].value;
    });


    this.enteredForm.controls['username'].valueChanges.subscribe(value => {
      this.enteredForm.controls['password'].setValue('');
    });
    const controls = this.enteredForm.controls;

    Object.keys(controls).forEach(controlName => {
      controls[controlName].markAsTouched();
    });
  }
  login() {
    if (this.authService.username && this.authService.password) {
      this.authService.login(this.authService.username, this.authService.password).subscribe(() => {
        if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/profile';
          this.router.navigateByUrl(redirect);
        } else {
          const dialogRef = this.dialog.open(FailedComponent, {
            width: '400px'
          });
        }
      });
    } else {
      const dialogRef = this.dialog.open(FailedComponent, {
        width: '400px'
      });
    }

  }
  formChanged() { }
  logout() {
    this.authService.logout();
  }
}
