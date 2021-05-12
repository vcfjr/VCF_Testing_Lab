import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadImgTestComponent } from './components/upload-img-test/upload-img-test.component';

const routes: Routes = [
  {path:'UploadImg', component: UploadImgTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
