import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { InternationalizationComponent } from './components/internationalization/internationalization/internationalization.component';
import { ParentComponent } from './components/parent-child-comm/parent/parent.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'rxjs-operator',
    component: RxjsOperatorsComponent
  },
  {
    path: 'internationalization',
    component: InternationalizationComponent
  },
  {
    path: 'practise',
    component: ParentComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
