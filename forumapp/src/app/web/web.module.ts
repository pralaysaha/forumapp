import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { LandingComponent } from './landing/landing.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  imports: [
    CommonModule,
    WebRoutingModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [AboutMeComponent, LandingComponent, ContactMeComponent]
})
export class WebModule { }
