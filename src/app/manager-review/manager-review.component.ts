import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-review',
  templateUrl: './manager-review.component.html',
  styleUrls: ['./manager-review.component.scss']
})
export class ManagerReviewComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  manager: boolean = true; 
  viewgoals: boolean = false;  

  performanceHistoryItems: any[] = [
    { employeeId: '5001001', employeeName: 'Ranjith Behara', year: 2024, reviewType: 'Q1', finalRating: 4.5 },
    
  ];

  view() {
   
    this.viewgoals= true;
    this.manager=false
  }
}
