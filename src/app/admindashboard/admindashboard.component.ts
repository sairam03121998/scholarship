import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmindashboardService } from '../admindashboard.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  kim: any;
  constructor(private service:AdmindashboardService,private router:Router) { }

  ngOnInit(): void {this.getLoginData();
  }

  private getLoginData():void{
    this.service.getLogin().subscribe((result: any)=>
     {
       this.kim=result;
     });
  }

   public statusUpdate( kimdata:any,statusname:Boolean){
       this.service.UpdateStatusData(kimdata,statusname)
       .subscribe(data =>
        {
          console.log(data);
        });

  
     }
    }