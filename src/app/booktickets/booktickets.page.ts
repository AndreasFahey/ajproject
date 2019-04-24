import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/Models/booking/booking.model';
import { BookingListService } from 'src/services/booking-List/booking-list.service';
import { NavController } from 'AJcinemas/node_modules/@ionic/angular/dist/core';


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

  constructor(public navCtrl: NavController, private Booking: BookingListService) { }

  ngOnInit() {
  }

  addBooking(booking : Booking){
    this.Booking.addBooking(booking).then(ref => {
      console.log(ref.key);
    });
  }

  

}
