import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Reservation } from "../../models/reservation/reservation.model";


@Injectable()
export class ReservationListService {

    

    private reservationListRef = this.db.list<Reservation>("reservation-list");
 
    
    constructor(private db: AngularFireDatabase){ }

    getReservationList(){

       //return this.reservationListRef.query.orderByChild('time');

      return this.reservationListRef;

      // var ref = this.reservationListRef.query.orderByChild('time');

       //var ref = this.db.database.ref("reservation-list");
       //return ref.orderByChild("time").on("child_added",function(snapshot)
       //{
         //  console.log(snapshot.key);
       //});
    }

    addReservation(reservation: Reservation){
        return this.reservationListRef.push(reservation);
    }

    editReservation(reservation: Reservation){
        return this.reservationListRef.update(reservation.key, reservation);
    }

    deleteReservation(reservation: Reservation){
        return this.reservationListRef.remove(reservation.key);
    }
}