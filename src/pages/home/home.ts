import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ReservationListService } from '../../services/reservation-list/reservation-list.service';
import { Observable } from 'rxjs/Observable';
import { Reservation } from '../../models/reservation/reservation.model';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

}
