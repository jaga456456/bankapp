import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { SharedService } from '../../services/shared/shared.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public getUserDetails;
  public gatDashboardSettings;
  @Input() userDetailsInput;
  @Input() dashboardDetailsInput;
  constructor(private dashboardService: DashboardService, private sharedService:SharedService) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.userDetailsInput.currentValue!=null) {
      this.userDetailsInput = changes.userDetailsInput.currentValue;
    }
  }
  ngOnInit() {
    this.getUserDetails=this.dashboardService.getUserDetails().subscribe(response=>{
      this.userDetailsInput = response;
    });
    this.gatDashboardSettings= this.dashboardService.getDashboardSettings().subscribe(response=>{
      this.dashboardDetailsInput =response;
    });
  }
}
