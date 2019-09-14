import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent }from '../components/header/header.component';
import { StoresComponent } from '../components/stores/stores.component';
import { MissingStoresComponent } from '../components/missing-stores/missing-stores.component';
import { HttpClientModule } from '@angular/common/http';
import { MidataserviceService } from '../services/midataservice.service';


const route = [
  {path:"missingstroes",component:MissingStoresComponent},

]

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,RouterModule.forRoot(route)],
  declarations: [ AppComponent, HelloComponent, HeaderComponent ,StoresComponent,MissingStoresComponent],
  providers: [ MidataserviceService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { 
  
}
