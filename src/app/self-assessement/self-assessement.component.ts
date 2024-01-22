import { Component } from '@angular/core';

@Component({
  selector: 'app-self-assessement',
  templateUrl: './self-assessement.component.html',
  styleUrls: ['./self-assessement.component.scss']
})
export class SelfAssessementComponent {
  assessmentData = [
    { title: 'ESAT - Upskill or Reskil', weightage: 10 },
    { title: 'Delivery Excellence - Process', weightage: 10 },
    { title: 'Delivery Excellence - Communication', weightage: 10 },
    { title: 'Delivery Excellence - Quality', weightage: 25 },
    { title: 'Innovation - Value proposition', weightage: 5 },
    { title: 'CSAT - Appreciation and Escalation', weightage: 10 },
    { title: 'Delivery Excellence - Quality', weightage: 25 },
    { title: 'ESAT - People Development', weightage: 5 }
    
  ];
}
