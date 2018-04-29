import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { ReservationListService } from '../services/reservation-list/reservation-list.service';
import { ToastService } from '../services/toast/toast.service';
import { Calendar } from '@ionic-native/calendar';

@NgModule({
  declarations: [
    MyApp,    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReservationListService, ToastService,
    Calendar
  ]
})
export class AppModule {}
