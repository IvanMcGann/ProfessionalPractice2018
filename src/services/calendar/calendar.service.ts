import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Calendar } from "../../models/calendar/calendar.model";


@Injectable()
export class CalendarService {

 
    constructor(private db: AngularFireDatabase){ }

    
    showSchedule(calendar: Calendar){
    
        }
}
