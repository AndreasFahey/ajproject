import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.page.html',
  styleUrls: ['./classic.page.scss'],
})
export class ClassicPage implements OnInit {

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

  ngOnInit() {
  }

}
