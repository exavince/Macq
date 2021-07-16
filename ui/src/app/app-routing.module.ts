import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorseFormComponent } from './horse-form/horse-form.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes = [
  {path: 'table', component: TableComponent, canActivate:[AuthGuard]},
  {path: 'add-horse', component: HorseFormComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path:'**', redirectTo:'/table', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
