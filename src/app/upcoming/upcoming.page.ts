import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  dashboard(){
    this.router.navigateByUrl('/dashboard');
  }

  timetable(){
    this.router.navigateByUrl('/timetable');
  }

  booktickets(){
    this.router.navigateByUrl('/booktickets');
  }

  ngOnInit() {
  }

}
