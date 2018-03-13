import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Reservation } from "../../models/reservation/reservation.model";


@Injectable()
export class ReservationListService {

    private reservationListRef = this.db.list<Reservation>("reservation-list");
 
    constructor(private db: AngularFireDatabase){ }

    getReservationList(){
        return this.reservationListRef;
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