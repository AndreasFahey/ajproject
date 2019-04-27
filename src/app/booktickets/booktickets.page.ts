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
export class BookticketsPage implements OnInit 

{
 
  bookings: any;
  bookingMovie: string;
  bookingTime: string;
  bookingRow: string;
  bookingSeat: number;
 
  constructor(
    private Booking: BookingListService,
    private router: Router
    ) { }
 
  ngOnInit() {
    this.Booking.read_Bookings().subscribe(data => {
 
      this.bookings = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Movie: e.payload.doc.data()['Movie'],
          Time: e.payload.doc.data()['Time'],
          Row: e.payload.doc.data()['Row'],
          Seat: e.payload.doc.data()['Seat'],
        };
      })
      console.log(this.bookings);
 
    });
  }
 
  CreateRecord() {
    let record = {};
    record['Movie'] = this.bookingMovie;
    record['Time'] = this.bookingTime;
    record['Row'] = this.bookingRow;
    record['Seat'] = this.bookingSeat;
    this.Booking.create_NewBooking(record).then(resp => {
      this.bookingMovie = "";
      this.bookingTime = "";
      this.bookingRow = "";
      this.bookingSeat = undefined;
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.Booking.delete_Booking(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.Movie = record.Movie;
    record.Time = record.Time;
    record.Row = record.Row;
    record.Seat = record.Seat;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Movie'] = recordRow.EditMovie;
    record['Time'] = recordRow.EditTime;
    record['Row'] = recordRow.EditRow;
    record['Seat'] = recordRow.EditSeat;
    this.Booking.update_Booking(recordRow.id, record);
    recordRow.isEdit = false;
  }


  dashboard(){
    this.router.navigateByUrl('/dashboard');
  }
 
 
}
