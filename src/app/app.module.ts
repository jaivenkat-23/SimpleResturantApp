import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list'
import{MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from  '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule} from '@angular/common/http';


import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { TestComponent } from './test/test.component';
import {MatIconModule} from '@angular/material/icon';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {LeaderService} from './services/leader.service';
import {DishService} from './services/dish.service';
import {PromotionService} from './services/promotion.service';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component'

import {baseURL} from './shared/baseurl';
import { HighlightDirective } from './directives/highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TestComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective,
    
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatDialogModule,
    MatSelectModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [
   DishService, 
  PromotionService,
  LeaderService,
  {provide: 'BaseURL', useValue: baseURL}
],
  entryComponents:[
   LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
