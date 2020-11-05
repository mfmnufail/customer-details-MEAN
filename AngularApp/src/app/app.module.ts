import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContestentComponent } from './contestent/contestent.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    AppComponent,
    ContestentComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
