import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navigationPath = new EventEmitter<any>();
  public headerSettings;
  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.getHeaderSettings().subscribe(res => {
      this.headerSettings = res;
    });
  }

  goToHome() {
    this.navigationPath.emit('home');
  }

  goToNews() {
    this.navigationPath.emit('news');
  }

  goToProducts() {
    this.navigationPath.emit('products');
  }

  goToServices() {
    this.navigationPath.emit('services');
  }

  goToContacts() {
    this.navigationPath.emit('contacts');
  }
}
