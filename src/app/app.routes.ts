import { Routes } from '@angular/router';
import { Login } from './login/login';
import { MainPage } from './main-page/main-page';
import { info } from 'console';
import { Info } from './studentinfo/info';


export const routes: Routes = [
{path: "", redirectTo:'login', pathMatch: 'full'},
{path: 'login', component : Login },
{path: 'main-page', component: MainPage},
{path: 'student/:sno', component: Info},
];
