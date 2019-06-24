import {Component, Injectable, OnInit} from '@angular/core';
import {Route, Router, RouterModule, ROUTES} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


@Injectable()
export class AppComponent implements OnInit {

  constructor(private router: Router) {}
  title = 'EDD-Database';


  ngOnInit() {
    this.router.navigateByUrl('/add');

  }

}
