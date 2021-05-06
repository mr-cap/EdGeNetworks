import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: 'contact', component: ContactComponent,
  },
  {
    path: 'info', component: InfoComponent,
  },
  {
    path: '', redirectTo: 'contact', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
