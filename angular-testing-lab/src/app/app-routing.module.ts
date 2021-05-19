import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularRoutingDeepComponent } from './angular/angular-routing-deep/angular-routing-deep.component';
import { UploadImgTestComponent } from './components/upload-img-test/upload-img-test.component';
import { AngularNotifierTestComponent } from './new/angular-notifier-test/angular-notifier-test.component';

const routes: Routes = [
  {path:'UploadImg', component: UploadImgTestComponent},
  {path: 'routing', component: AngularRoutingDeepComponent},
  {path: 'notifier', component: AngularNotifierTestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
