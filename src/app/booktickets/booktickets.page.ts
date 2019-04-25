import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/Models/booking/booking.model';
import { BookingListService } from 'src/services/booking-List/booking-list.service';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
 


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

  constructor(
    private Booking: BookingListService,
    private navCtrl: NavController,
    private router: Router
    
    ) { }

  ngOnInit() {
  }

  addBooking(booking : Booking){
    this.Booking.addBooking(booking).then(ref => {
      console.log(ref.key);
      this.router.navigateByUrl('/bookedseats');
    });
  }

  

}
