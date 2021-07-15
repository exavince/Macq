import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { HorseFormComponent } from './horse-form/horse-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigneupComponent } from './signeup/signeup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TableComponent,
    HorseFormComponent,
    SigneupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
