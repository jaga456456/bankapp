import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public currentPath='home';
  public headerSettings;
  constructor(private router: Router, private dashboardService:DashboardService, private sharedService:SharedService) { }

  ngOnInit() {
      this.getDashBoardSettings();
  }

  setNavigation(event) {
    this.currentPath = event;
    // switch(this.currentPath) {
    //   case 'home' : this.router.navigateByUrl('/dashboard/home');
    //         break;
    //   case 'news' : this.router.navigateByUrl('/dashboard/news');
    //         break;
    //   case 'services' : this.router.navigateByUrl('/dashboard/services');
    //         break;
    //   case 'products' : this.router.navigateByUrl('/dashboard/products');
    //         break;
    //   case 'contacts' : this.router.navigateByUrl('/dashboard/contacts');
    //         break;
    // }
  }

  getDashBoardSettings() {        
    this.dashboardService.getDashboardSettings().subscribe(response=> {
      this.headerSettings = response.headersettings;
      this.sharedService.setHeaderSettings(this.headerSettings);
    });
  }
}