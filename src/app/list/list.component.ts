import { Component, OnInit } from '@angular/core';
import { GithubServiceService} from '../github-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  res: any;
  today: number=Date.now();

  constructor(private _GithubServiceService:GithubServiceService) { 
    this._GithubServiceService.getData().subscribe(res => {
      this.res = res.json();
    });
  }

  ngOnInit() {
  }
  date_difent(date1:any) {
    let diffInMs: number = this.today - Date.parse(date1);
    let diffInDays: number = diffInMs / 24 / 1000 / 60 / 60;

     return diffInDays;
   }

}
