import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNestedComponent } from './my-nested/my-nested.component';
import { MySecondNestedComponent } from './my-second-nested/my-second-nested.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNestedComponent,
    MySecondNestedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
