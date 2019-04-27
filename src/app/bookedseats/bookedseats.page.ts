import { Component, OnInit } from '@angular/core';
import { BookingListService } from 'src/services/booking-List/booking-list.service';
import { Observable } from 'node_modules/rxjs';
import { Booking } from 'src/Models/booking/booking.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookedseats',
  templateUrl: './bookedseats.page.html',
  styleUrls: ['./bookedseats.page.scss'],
})
export class BookedseatsPage implements OnInit {
  
  bookingList$: Observable<Booking[]>;

  constructor(
    private booking: BookingListService,
    private router: Router
    ) 
  { 
   
  }

  dashboard(){
    this.router.navigateByUrl('/dashboard');
  }


  ngOnInit() {
  }

}
