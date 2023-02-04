import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from './heroes/heroes.Module';
import { ContadorModule } from './contador/contador.Module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
