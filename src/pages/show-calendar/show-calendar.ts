import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Calendar } from '../../models/calendar/calendar.model';
import { Reservation } from '../../models/reservation/reservation.model';
import { Observable } from 'rxjs/Observable';
import { ReservationListService } from '../../services/reservation-list/reservation-list.service';


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


/**

  showSchedule(){
    ref.orderByChild("date").startAt("2017-01-01").endAt("2017-01-31");
  }



 eventSource;
    viewTitle;
    events = [];
    isToday: boolean;
    selectedDay = new Date();
    calendar = {
        mode: 'month',
        currentDate: new Date()
    }; // these are the variable used by the calendar.
   



      this.db.list(this.path).subscribe(data=>{
      console.log(data.length);
      for (var i = 0; i < data.length; ++i) {

        console.log(data[i]);
        this.loadEvents(data[i]);
      }
    },err=>{
       console.log(err);
    });


      
      
  }

   

       loadEvents(data) {
	        this.events.push({
	            title: data.title,
	            startTime: new Date(data.startTime),
	            endTime: new Date(data.endTime),
	            allDay: data.allDay
	        });

	        this.eventSource = this.events;
        }

    changeMode(mode) {
        this.calendar.mode = mode;
    }

  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    

    modal.onDidDismiss(data => {
    	console.log(data)
      
      if (data) {
        var dbData = {};
        Object.assign(dbData,data)
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
        this.events.push(eventData);
        this.eventSource = [];
        
       
        setTimeout(() => {
          this.eventSource = this.events;
          
          this.db.list(this.path).push(dbData);
        });
      }
    });
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {

    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
    
  }
 */