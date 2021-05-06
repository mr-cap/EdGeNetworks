import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from 'src/app/services/rest.service';
import { Users } from '../Users';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  modalTitle: string;
  loadingContent = false;
  contactDB: any[] = [];
  addContactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    contact: new FormControl(''),
    email: new FormControl(''),
    comment: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    pin: new FormControl(''),
  });
  usersDB: any[] = [];
  stateData: Users[] = [];
  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router,
              private rs: RestService) {
    this.addContactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', Validators.required],
      comment: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pin: ['', Validators.required],
    });
  }

  get f(): any {
    return this.addContactForm.controls;
  }

  ngOnInit(): void {
    this.rs.getUsers().subscribe(
      (response) => {
        this.stateData = response;
        console.log(this.stateData);
      },
      (error) => {
        console.log('Error:' + error);

      }
    );
  }
  onSubmit(): void {
    if (this.addContactForm.valid) {
      this.loadingContent = true;
      setTimeout(() => {
        this.loadingContent = false;
        const contactData = {
          firstName: this.f.firstName.value,
          lastName: this.f.lastName.value,
          email: this.f.email.value,
          contact: this.f.contact.value,
          comment: this.f.comment.value,
          address1: this.f.address1.value,
          address2: this.f.address2.value,
          city: this.f.city.value,
          state: this.f.state.value,
          country: this.f.country.value,
          pin: this.f.pin.value,
        };
        console.log(contactData);
      //   this.project.updateOfficedetails(body).subscribe(res => {
      //     const message = res.message;
      //     this.toastr.success(message, 'Updated');
      //     this.addOfficeForm.reset();
      //     this.viewCompanyDetail();
      //   }, err => {
      //     const message = err.error.message;
      //     this.toastr.error(message, 'Failed');
      //     console.log(err.error.message);
      //   });
      // }

        if (localStorage.getItem('contact')){
          this.contactDB = JSON.parse(localStorage.getItem('contact'));
        }
        this.contactDB.push(contactData);
        localStorage.setItem('contact', JSON.stringify(this.contactDB));
        alert('Successful Request');
        this.addContactForm.reset();

      }, 1000);
    }
  }
}


