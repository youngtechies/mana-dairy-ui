import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {User} from '../model/User';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TooltipPosition} from '@angular/material/tooltip';
import {MatDialogRef} from '@angular/material/dialog';
import {CustomValidators} from '../custom-config/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router,
              private userService: UserService,
              // tslint:disable-next-line:variable-name
              private _snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<RegisterComponent>,
              private fb: FormBuilder) {
    this.user = new User();
    this.frmSignup = this.createSignupForm();
  }
  form: FormGroup;
  public frmSignup: FormGroup;

  closeResult = '';
  hide = true;
  isSignInButtonEnabled = false;
  isSignUpButtonEnabled = true;
  isForgetPassClicked = false;
  user: User;
  isInvalid: boolean;
  appTitle = 'Mana Diary';
  mobileNo = 'Please input 10 digit mobile number without country code';
  customerPass = 'Rule : minimum size 7, maximum size 15, one upper case letter, one lower case letter,one digit, one special character';
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  contactNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  position = (this.positionOptions[3]);

  customerName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  onClickSignIn() {
    this.isSignInButtonEnabled = true;
    this.isSignUpButtonEnabled = false;
  }
  onClickSignUp() {
    this.isSignInButtonEnabled = false;
    this.isSignUpButtonEnabled = true;
  }
  onClickForgetPass() {
    this.isSignInButtonEnabled = false;
    this.isSignUpButtonEnabled = false;
    this.isForgetPassClicked = true;
  }
  onLogin() {
    console.log(this.frmSignup.value);
    this.userService.logIn(this.user).subscribe((data) => {
      console.log('checking ::::: ', data);
      if ((data.token) !== 'fail') {
        // this.modalService.dismissAll();
        this.router.navigate(['/welcome']);
      } else {
        this.isInvalid = true;
      }
    });
  }
  onSubmit() {
    // Testing started
    console.log(this.frmSignup.value);
    this.openSnackBar();
    this.dialogRef.close();
    // Testing over
    this.userService.signUp(this.user).subscribe((respons) => {
        // validate the response here and then close the dialog
        // after successfull adding customer
        // this.dialogRef.close();
        this.router.navigate(['/welcome']);
        this.openSnackBar();
      },
      e => {
      });
  }

  openSnackBar() {
    this._snackBar.open('Registration success', null, {
      duration: 2000,
     });
  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        // email: [
        //   null,
        //   Validators.compose([Validators.email, Validators.required])
        // ],
        contactNumber: [
          null,
          Validators.compose([Validators.required, CustomValidators.patternValidator(/^((\+91-?)|0)?[0-9]{10}$/, {
            hasNumber: true
          })])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
      },
    );
  }
  submit() {
    // do signup or something
    console.log(this.frmSignup.value);
  }

  getErrorMessage() {
    if (this.customerName.hasError('required')) {
      return 'You must enter a value';
    }
    return this.customerName.hasError('minlength') ? 'Name at least 3 characters' : '';
  }
}
