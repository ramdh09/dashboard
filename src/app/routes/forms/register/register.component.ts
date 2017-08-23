import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;

  constructor(fb: FormBuilder) {

    let loginPassword = new FormControl('', Validators.compose([Validators.required,Validators.minLength(8)]));
    let loginPasswordConfirm = new FormControl('', CustomValidators.equalTo(loginPassword));

    this.loginForm = fb.group({
      'firstName': [null, Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')])],
      'lastName': [null],
      'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
      'password': loginPassword,
      'confirmPassword': loginPasswordConfirm
    });
  }

  submitForm($ev, form: FormGroup) {
    $ev.preventDefault();
    let value = form.value;
    for (let c in form.controls) {
      form.controls[c].markAsTouched();
    }
    if (form.valid) {
      console.log('Valid!');
    }
    console.log(value);
  }

  ngOnInit() {
  }

}
