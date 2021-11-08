import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KarriereComponent } from './karriere/karriere.component';
import { KontaktformularComponent } from './kontaktformular/kontaktformular.component';
import { SteckbriefComponent } from './steckbrief/steckbrief.component';
import { StiftungenComponent } from './stiftungen/stiftungen.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';


const routes: Routes = [
  { path: 'ueberUns', component:  UeberUnsComponent},
  { path: 'kontakformular', component:  KontaktformularComponent},
  { path: 'stiftungen', component:  StiftungenComponent},
  { path: 'karriere', component:  KarriereComponent},
  { path: 'steckbrief', component:  SteckbriefComponent},
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
