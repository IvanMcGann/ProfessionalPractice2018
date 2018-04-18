import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from '../../models/calendar/calendar.model';
import { Reservation } from '../../models/reservation/reservation.model';
import { Observable } from 'rxjs/Observable';
import { ReservationListService } from '../../services/reservation-list/reservation-list.service';

/**
 * Generated class for the ShowCalendarPage page.
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-calendar',
  templateUrl: 'show-calendar.html',
})
export class ShowCalendarPage {

  calendar: Calendar = {
    startDate: undefined,
    endDate: undefined
  };
  
  reservationList$: Observable<Reservation[]>;

  constructor(public navCtrl: NavController, private appointment: ReservationListService) {

    this.reservationList$ = this.appointment.
    getReservationList() //DB List
    .snapshotChanges() //Key and Value
    .map(changes =>{
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowCalendarPage');
    

  }



  //    this.navCtrl.setRoot('HomePage');
}
