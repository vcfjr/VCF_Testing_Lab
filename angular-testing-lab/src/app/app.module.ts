import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImgTestComponent } from './components/upload-img-test/upload-img-test.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularNotifierTestComponent } from './new/angular-notifier-test/angular-notifier-test.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { AngularRoutingDeepComponent } from './angular/angular-routing-deep/angular-routing-deep.component';
import { AuthComponent } from './firebase/auth/auth.component';

const customNotifierOptions: NotifierOptions = {
	position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
	theme: 'material',
	behaviour: {
		autoHide: 5000,
		onClick: false,
		onMouseover: 'pauseAutoHide',
		showDismissButton: true,
		stacking: 4
	},
	animations: {
		enabled: true,
		show: {
			preset: 'slide',
			speed: 300,
			easing: 'ease'
		},
		hide: {
			preset: 'fade',
			speed: 300,
			easing: 'ease',
			offset: 50
		},
		shift: {
			speed: 300,
			easing: 'ease'
		},
		overlap: 150
	}
};

@NgModule({
  declarations: [
    AppComponent,
    UploadImgTestComponent,
    AngularNotifierTestComponent,
    AngularRoutingDeepComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
