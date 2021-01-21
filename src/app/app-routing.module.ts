import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupComponent } from 'src/components/popup/popup.component';

const routes: Routes = [
  { path: '', component: PopupComponent },
  { path: 'popup', component: PopupComponent },
  { path: '**', component: PopupComponent },
  { path: '*', component: PopupComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
