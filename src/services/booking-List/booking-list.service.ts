import { Injectable } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database';
import { Booking } from 'src/Models/booking/booking.model';

@Injectable()
export class BookingListService{
    
    private bookingListRef = this.db.list<Booking>
    ('booking-list');
    
    constructor(private db: AngularFireDatabase){}

    getBookingList(){
        return this.bookingListRef;
    }

    addBooking(booking: Booking){
        return this.bookingListRef.push(booking);
    }
}