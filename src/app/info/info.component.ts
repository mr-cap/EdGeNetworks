import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  contactList = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.contactList = JSON.parse(localStorage.getItem('contact'));
  }

}

