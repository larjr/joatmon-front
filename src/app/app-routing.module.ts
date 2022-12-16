import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringComponent } from './string/string.component';

const routes: Routes = [  
  { path: 'string', component: StringComponent },
  { path: '', pathMatch: 'full', redirectTo: 'string' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
