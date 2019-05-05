import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from './components/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { PageComponent } from './components/page/page.component';
import { PageErrorComponent } from './components/page-error/page-error.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ButtonComponent, PageComponent, PageErrorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
