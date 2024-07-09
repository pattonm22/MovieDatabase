import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './core/components/banner/banner.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BrowseComponent } from './core/pages/browse/browse.component';
import { LoginComponent } from './core/pages/login/login.component';
import { provideHttpClient } from '@angular/common/http';
import { MovieCarouselComponent } from './core/shared/components/movie-carousel/movie-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    BrowseComponent,
    LoginComponent,
    MovieCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
