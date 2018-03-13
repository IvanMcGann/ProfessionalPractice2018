import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reservation } from '../../models/reservation/reservation.model';
import { ReservationListService } from '../../services/reservation-list/reservation-list.service';
import { ToastService } from '../../services/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-edit-reservation',
  templateUrl: 'edit-reservation.html',
})
export class EditReservationPage {

  reservation: Reservation;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private appointment: ReservationListService, private toast: ToastService) {
  }

  ionViewWillLoad() {
   this.reservation = this.navParams.get('reservation');
  }

  saveReservation(reservation: Reservation){
    this.appointment.editReservation(reservation).then(() => {
      this.toast.show(`${reservation.name} appointment saved!`);
      this.navCtrl.setRoot('HomePage');
    });
  }

  deleteReservation(reservation){
    this.appointment.deleteReservation(reservation)
    .then(() => {
      this.toast.show(`${reservation.name} appointment deleted!`);
      this.navCtrl.setRoot('HomePage');
    });
  }

}
