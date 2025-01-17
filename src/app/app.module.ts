import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import {AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AuthenticateService } from './services/authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingListService } from 'src/services/booking-List/booking-list.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';




firebase.initializeApp(environment.firebase);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [

    BrowserModule,
    CommonModule, 
    IonicModule.forRoot(),
    IonicModule ,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, 
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticateService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },
    BookingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
