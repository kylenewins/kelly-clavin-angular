import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DigitalIllustrationComponent} from './digital-illustration/digital-illustration.component';
import {FashionDesignComponent} from './fashion-design/fashion-design.component';
import {FineArtComponent} from './fine-art/fine-art.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'digital-illustration', component: DigitalIllustrationComponent},
  {path: 'fashion-design', component: FashionDesignComponent},
  {path: 'fine-art', component: FineArtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
