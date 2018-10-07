import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { LandingComponent } from './landing/landing.component';
import { ContactMeComponent } from './contact-me/contact-me.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'contact', component: ContactMeComponent },
  {
    path: 'blog',
    loadChildren: '../blog/blog.module#BlogModule'
  },
  {
    path: 'photo',
    loadChildren: '../photo-gallery/photo-gallery.module#PhotoGalleryModule'
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
