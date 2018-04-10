import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Calendar } from "../../models/calendar/calendar.model";


@Injectable()
export class CalendarService {

    private calendarRef = this.db.list<Calendar>("reservation-list");
 
    constructor(private db: AngularFireDatabase){ }

    
    showSchedule(calendar: Calendar){
    
        }
}
