import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Booking } from 'src/Models/booking/booking.model';

@Component({
  selector: 'app-editbookings',
  templateUrl: './editbookings.page.html',
  styleUrls: ['./editbookings.page.scss'],
})
export class EditbookingsPage implements OnInit {
 
  booking: Booking;

  constructor(
    public navCtrl: NavController,
    
    ) { }

    ionViewDidLoad(){
      
    }

    updateBooking(){
      
    }

  ngOnInit() {
  }

}
