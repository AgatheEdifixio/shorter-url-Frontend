import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RedirectCompComponent } from './redirect-comp/redirect-comp.component';
import { ListUrlComponent } from './list-url/list-url.component';
import { NavComponent } from './nav/nav.component';
import { SingleUrlComponent } from './single-url/single-url.component';
import { UrlsService } from './services/urls.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RedirectCompComponent,
    ListUrlComponent,
    NavComponent,
    SingleUrlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UrlsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
