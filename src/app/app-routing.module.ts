import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { FormularComponent } from "./formular/formular.component";

const routes: Routes = [
  { path: "login", component: AppComponent },
  //{ path: 'view-detail/:id', component: ViewDetailComponent },

  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", component: AppComponent },
  { path: "formular", component: FormularComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
