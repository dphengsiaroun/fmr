import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./page/home/home.component";
import { SlideComponent } from "./components/slide/slide.component";
import { BannerComponent } from "./components/banner/banner.component";
import { ListProductsComponent } from "./components/list-products/list-products.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { BlogComponent } from "./components/blog/blog.component";
import { BlocNewsletterComponent } from "./components/bloc-newsletter/bloc-newsletter.component";
import { HomeRoutingModule } from './home-routing.module';
import { SuggestProductsComponent } from './components/suggest-products/suggest-products.component';

@NgModule({
  declarations: [
    HomeComponent,
    SlideComponent,
    BannerComponent,
    ListProductsComponent,
    TestimonialsComponent,
    BlogComponent,
    BlocNewsletterComponent,
    SuggestProductsComponent
  ],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent]
})
export class HomeModule {}
