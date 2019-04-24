import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/Models/booking/booking.model';
import { BookingListService } from 'src/services/booking-List/booking-list.service';



@Component({
  selector: 'app-booktickets',
  templateUrl: './booktickets.page.html',
  styleUrls: ['./booktickets.page.scss'],
})
export class BookticketsPage implements OnInit {
  booking: Booking ={
    Movie: '',
    Time: '',
    Seat: 0
  };

  constructor(private Booking: BookingListService) { }

  ngOnInit() {
  }

  addBooking(booking : Booking){
    this.Booking.addBooking(booking).then(ref => {
      console.log(ref.key);
    });
  }

  

}
