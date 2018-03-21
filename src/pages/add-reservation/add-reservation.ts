import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reservation } from '../../models/reservation/reservation.model';
import { ReservationListService } from '../../services/reservation-list/reservation-list.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the AddReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-reservation',
  templateUrl: 'add-reservation.html',
})
export class AddReservationPage {

  reservation: Reservation = {
    name: '',
    service: '',
    price: undefined,
    time: undefined,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private appointment: ReservationListService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReservationPage');
  }

  addReservation(reservation: Reservation){
    this.appointment.addReservation(reservation).then(ref =>{
    this.toast.show(`${reservation.name} added!`);
    this.navCtrl.setRoot('HomePage', {key: ref.key });
    });
  }

}
