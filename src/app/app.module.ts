import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardOneComponent } from './card-one/card-one.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { ProjectExperienceComponent } from './project-experience/project-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOneComponent,
    CardTwoComponent,
    ProjectExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
