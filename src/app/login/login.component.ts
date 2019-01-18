import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  isLoading = false;

  ngOnInit() {
  }

  submitForm(loginForm: NgForm) {
    this.isLoading = true;
    // console.log(loginForm);
    const { value, valid } = loginForm;
    console.log('Submit form', valid, value);
    if (valid) {
      // Fake service Login call....
      this.callLogin(value.email, value.password);
    }
  }

  callLogin(email: string, password: string) {
    console.log('call login...');
    setTimeout(
      () => {
        // finta risposta del server Logi ok
        this.isLoading = false;
      }, 3 * 1000);
  }

  sendForm(event: MouseEvent) {
    console.log('Form Inviato!!');
    // event.preventDefault();
    // event.stopPropagation();
  }

}
