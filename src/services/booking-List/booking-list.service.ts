import { Injectable } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database';
import { Booking } from 'src/Models/booking/booking.model';
import { AngularFirestore } from '@angular/fire/firestore'


@Injectable()
export class BookingListService{
    
    constructor(
        private firestore: AngularFirestore
      ) { }


    create_NewBooking(record) {
        return this.firestore.collection('Bookings').add(record);
      }
     
      read_Bookings() {
        return this.firestore.collection('Bookings').snapshotChanges();
      }
     
      update_Booking(recordID,record){
        this.firestore.doc('Bookings/' + recordID).update(record);
      }
     
      delete_Booking(record_id) {
        this.firestore.doc('Bookings/' + record_id).delete();
      }
    }
    
