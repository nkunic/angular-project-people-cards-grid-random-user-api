import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PeopleCardsModule } from './people-cards/people-cards.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    PeopleCardsModule, 
    FontAwesomeModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    CardComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

