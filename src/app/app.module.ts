import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormularComponent } from "./formular/formular.component";
import { ReactiveFormsModule } from "@angular/forms";
//import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, FormularComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
