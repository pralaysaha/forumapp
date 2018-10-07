import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryLandingComponent } from './gallery-landing/gallery-landing.component';

const routes: Routes = [
    { path: '', component: GalleryLandingComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})
export class PhotoGalleryRouteModule { }
