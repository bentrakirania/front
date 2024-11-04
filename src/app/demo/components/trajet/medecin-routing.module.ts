import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrajetComponent } from './trajet.component';

const routes: Routes = [
  { path: '', component: TrajetComponent } // Cette ligne permet de rendre TrajetComponent lorsque la route '/trajet' est accédée
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Utilisez forChild pour les routes enfants
  ],
  declarations: [TrajetComponent]
})
export class TrajetModule { }
