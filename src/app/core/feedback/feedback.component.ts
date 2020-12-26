import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent implements OnInit{
  name = 'Feedback';
  formGroup: FormGroup;
  public selectedVal: string;

  constructor() {
    this.formGroup = new FormGroup({
      emailField: new FormControl('', [Validators.required, Validators.email]),
      feedbackField: new FormControl('', [
        Validators.required,
        Validators.minLength(25),
        Validators.maxLength(3000)
      ])
    });
  }

  ngOnInit(): void {
    this.selectedVal = 'productFeedback';
  }

  getErrorMessage(control: AbstractControl): string {
    // Don't say anything if control doesn't exist, or is valid
    if (!control || control.valid) {
      return '';
    }

    // Required always comes first
    if (control.hasError('required')) {
      return 'Cannot be empty';
    }
    if (control.hasError('email')) {
      return 'Must be a valid email';
    }
    if (control.hasError('minlength')) {
      const limit = control.getError('minlength').requiredLength;
      return `Must be at least ${limit} characters`;
    }
    if (control.hasError('minlength')) {
      const limit = control.getError('maxlength').requiredLength;
      return `Must be no more than ${limit} characters`;
    }

    // Default general error message
    return 'Invalid input';
  }

  onSubmit() {
    this.formGroup.reset();
  }

  get emailField(): AbstractControl {
    return this.formGroup.get('emailField');
  }

  get feedbackField(): AbstractControl {
    return this.formGroup.get('feedbackField');
  }

  public onValChange(val: string) {
    this.selectedVal = val;
  }

}
