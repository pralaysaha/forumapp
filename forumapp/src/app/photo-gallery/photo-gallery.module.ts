import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGalleryRouteModule } from './photo-gallery-route.module';
import { RouterModule } from '@angular/router';
import { GalleryLandingComponent } from './gallery-landing/gallery-landing.component';

@NgModule({
  imports: [
    CommonModule,
    PhotoGalleryRouteModule
  ],
  exports: [RouterModule],
  declarations: [GalleryLandingComponent]
})
export class PhotoGalleryModule { }
