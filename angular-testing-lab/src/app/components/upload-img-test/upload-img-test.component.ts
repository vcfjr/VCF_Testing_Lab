import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-img-test',
  templateUrl: './upload-img-test.component.html',
  styleUrls: ['./upload-img-test.component.css']
})
export class UploadImgTestComponent implements OnInit {

  constructor(private http: HttpClient) { }
  file:any;
  data:any;

  baseUrl = 'http://localhost:3000/upload';
  localURL : any;

  // On file Select
  onChange(event:any) {
    this.file = event.target.files;
    // if(event.target.files && event.target.files[0])
    // {
    //   var reader = new FileReader();
    //   reader.onload = (event:any) => {
    //     this.localURL = event.target.result
    //   }
    //   reader.readAsDataURL(event.target.files[0]);
    // }
  }

  async upload(data:any){
    // console.log(this.file);

    // Create form data
    const formData = new FormData(); 
        
    // Store form name as "file" with file data
    for(var i=0; i< this.file.length; i++){
      formData.append("file[]", this.file[i], this.file[i].name);
    }

      formData.append("name", data.name);

    
    
    
    console.log(this.file.name, this.file, formData);

    console.log(this.file)

    await this.http.post(this.baseUrl, formData).subscribe((response) => {
      console.log('response received is ', response);
  })

  }

  ngOnInit(): void {
  }

}
