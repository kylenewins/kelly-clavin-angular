import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FineArtComponent } from './fine-art/fine-art.component';
import { DigitalIllustrationComponent } from './digital-illustration/digital-illustration.component';
import { FashionDesignComponent } from './fashion-design/fashion-design.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FineArtComponent,
    DigitalIllustrationComponent,
    FashionDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
