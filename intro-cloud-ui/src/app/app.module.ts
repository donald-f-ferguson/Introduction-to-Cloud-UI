import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { SnuffleComponent } from './snuffle/snuffle.component';
import { NavtestComponent } from './navtest/navtest.component';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import { IntroToCloudComponent } from './intro-to-cloud/intro-to-cloud.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SnuffleComponent,
    NavtestComponent,
    IntroToCloudComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbNavModule
    ],
  providers: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


