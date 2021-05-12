import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImgTestComponent } from './components/upload-img-test/upload-img-test.component';
import { AngularNotifierTestComponent } from './new/angular-notifier-test/angular-notifier-test.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadImgTestComponent,
    AngularNotifierTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
