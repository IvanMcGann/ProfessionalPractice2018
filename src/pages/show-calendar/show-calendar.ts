import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from '../../models/calendar/calendar.model';

/**
 * Generated class for the ShowCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
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
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowCalendarPage');
  }

}
