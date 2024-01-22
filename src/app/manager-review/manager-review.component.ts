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
    { employeeId: 'BTIN100144', employeeName: 'Sai Krishna Edara', year: 2023, reviewType: 'Q3', finalRating: 3.0 },
    
  ];

  view() {
   
    this.viewgoals= true;
    this.manager=false
  }
}
