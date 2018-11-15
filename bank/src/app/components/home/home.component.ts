import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  public userDetailsInput;
  public headerSettings;
  public getUserDetails;
  public getDashboardSettings;
  @ViewChild('myTemp') para: ElementRef;
  @ViewChild('myInput') textbox: ElementRef;
  constructor(private dashboardService: DashboardService, private sharedService:SharedService, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
    this.getUserDetails=this.dashboardService.getUserDetails().subscribe(response=>{
      this.userDetailsInput = response;
      //this.textbox.nativeElement.value = this.userDetailsInput.firstname;
    });
    // this.renderer.listen(this.textbox.nativeElement,'focus',()=>{
    //   console.log(this.textbox.nativeElement.value);
    // });
  }

  ngOnDestroy() {
    this.getUserDetails.unsubscribe();
  }

}
