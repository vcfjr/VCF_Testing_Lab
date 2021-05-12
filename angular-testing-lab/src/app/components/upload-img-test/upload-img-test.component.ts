import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-img-test',
  templateUrl: './upload-img-test.component.html',
  styleUrls: ['./upload-img-test.component.css']
})
export class UploadImgTestComponent implements OnInit {

  constructor(private http: HttpClient) { }
  data:any;

  baseUrl = 'http://localhost:3000/upload';

  async upload(data:any){
    console.log(data);
    // await this.http.post(this.baseUrl, data).toPromise().then(data =>{
    //   console.log('done uploading Img')
    // })

  }
  ngOnInit(): void {
  }

}
