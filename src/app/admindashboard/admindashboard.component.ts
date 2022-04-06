import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmindashboardService } from '../admindashboard.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
})
export class AdmindashboardComponent implements OnInit {
  kim: any;
  statusObj: any = { status: 'Approve', id: 0 };
  constructor(private service: AdmindashboardService, private router: Router) {}

  ngOnInit(): void {
    this.getLoginData();
  }

  private getLoginData(): void {
    this.kim = [{
      name: 'Kim ',
      studentId: 1,
      _10thPercentage: 70,
      bePercentage: 90,
      status: "Approve"
    },
    {
      name: 'Sai',
      studentId: 1,
      _10thPercentage: 70,
      bePercentage: 90,

      status: "Approve"

    },
    {
      name: 'Yash',
      studentId: 1,
      _10thPercentage: 70,
      bePercentage: 90,
      status: "Approve"
    }];

    // this.service.getLogin().subscribe((result: any) => {
    //   this.kim = result;
    // });
  }
  public statusUpdate(obj: any, reqStatus: any, i: number) {
    this.service.UpdateStatusData(obj, i).subscribe((data) => {
      console.log(data);
    });
    reqStatus == 'approve'
      ? (this.kim[i].status = 'Approved')
      : (this.kim[i].status = 'Rejected');
  }
}
