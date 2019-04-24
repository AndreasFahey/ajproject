import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/Models/booking/booking.model';


@Component({
  selector: 'app-booktickets',
  templateUrl: './booktickets.page.html',
  styleUrls: ['./booktickets.page.scss'],
})
export class BookticketsPage implements OnInit {
  booking: Booking ={
    Movie: '',
    Time: ''
  };

  constructor() { }

  ngOnInit() {
  }

  

  

}
