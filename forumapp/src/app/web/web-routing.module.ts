import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { LandingComponent } from './landing/landing.component';
import { ContactMeComponent } from './contact-me/contact-me.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'contactme', component: ContactMeComponent },
  {
    path: 'blog',
    loadChildren: '../blog/blog.module#BlogModule'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class WebRoutingModule { }
