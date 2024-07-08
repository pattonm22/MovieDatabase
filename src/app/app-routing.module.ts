import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './core/pages/browse/browse.component';
import { LoginComponent } from './core/pages/login/login.component';
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'browse', component: BrowseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
