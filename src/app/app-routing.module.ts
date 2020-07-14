import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { FormularComponent } from "./formular/formular.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "formular", component: FormularComponent },
  { path: "login", component: LoginComponent },
  //{ path: 'view-detail/:id', component: ViewDetailComponent },

  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", component: LoginComponent }
  //{ path: "formular", component: FormularComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
