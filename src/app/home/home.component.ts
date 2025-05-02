import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  Attendance = [
    { name: 'Todays Attendance',  checked: true },
    
  ];
  MyApprovals = [
    { name: 'My Approvals/Action Items', checked: true },
  
  ];
  QuickLinks= [
    { name: 'Quick Links',  description: 'Collaboration between designers and developers.', checked: true },
  
  ];
  Birthdays= [
    { name: 'Birthdays',  description: 'Collaboration between designers and developers.', checked: true },
  
  ];
  Anniversaries= [
    { name: 'Anniversaries',  checked: true },
  
  ];
  Upcomingholidays= [
    { name: 'Upcoming Holidays',  description: 'Collaboration between designers and developers.', checked: true },
  
  ];
}

