import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  contactForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    lastName: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    subject: new FormControl(''),
    message: new FormControl('', [
      Validators.required
    ]),
  });

  onSubmit() { }
}
