import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRouteModule } from './blog-route.module';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BlogRouteModule
  ],
  exports: [RouterModule],
  declarations: [BlogDashboardComponent]
})
export class BlogModule { }
