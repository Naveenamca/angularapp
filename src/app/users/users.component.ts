import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {observable} from 'rxjs';
import { Data } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user$:Object;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data=>this.user$=data
    ) 
  }

}
