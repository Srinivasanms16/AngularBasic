import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {courseComponent}from './course.component'
import{authorComponent} from './author.component'
import {course2} from './course2.component'
import { footer }from './footer.component'
import { header } from './header.component';
import {empoyeecomponent} from './employee.component';
import {formCompotent } from './form.component';


@NgModule({
  declarations: [
    AppComponent,courseComponent,authorComponent,course2,footer,
    header,formCompotent,empoyeecomponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
