import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-viewgoals',
  templateUrl: './viewgoals.component.html',
  styleUrls: ['./viewgoals.component.scss']
})
export class ViewgoalsComponent implements OnInit {

  constructor(private router: Router,private ngxService: NgxUiLoaderService ) {
  }
  ngOnInit(): void {
    this.ngxService.startLoader("loader-06"); // start foreground spinner of the loader "loader-02" with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stopLoader("loader-06"); // stop foreground spinner of the loader "loader-01" with 'default' taskId
    }, 5000);
  }
  goals = [
    { name: 'CSAT - Appreciation and Escalation' },
    { name: 'Innovation - Value proposition' },
    { name: 'ESAT - Upskill or Reskill' },
    { name: 'ESAT - People Development' },
    { name: 'Delivery Excellence - Process' },
    { name: 'Delivery Excellence - Quality' },
    { name: 'Delivery Excellence - Quality' },
    { name: 'Delivery Excellence - Communication' },
  ];
  Back(){
    this.router.navigate(['/manager']);
  }
}
