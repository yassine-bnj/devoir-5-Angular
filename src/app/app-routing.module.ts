import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { LivresComponent } from './livres/livres.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';

const routes: Routes = [
  { path: "livres", component: LivresComponent },
  { path: "add-livre", component: AddLivreComponent },
  { path: "", redirectTo: "livres", pathMatch: "full" },
  { path: "updateLivre/:id", component: UpdateLivreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
