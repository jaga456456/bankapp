import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public DashDetails;
  public userDetails;
  constructor(private Registerservice: RegisterService) { }

  ngOnInit() {
    this.Registerservice.getUserDetails().subscribe(response=>{
      this.userDetails = response;
  });
  this.Registerservice.getDashboardDetails().subscribe(response=>{
    this.DashDetails = response;
  });
  
  } 
}
