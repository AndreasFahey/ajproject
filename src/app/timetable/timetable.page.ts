import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  dashboard(){
    this.router.navigateByUrl('/dashboard');
  }

  booktickets(){
    this.router.navigateByUrl('/booktickets');
  }

  ngOnInit() {
  }

}