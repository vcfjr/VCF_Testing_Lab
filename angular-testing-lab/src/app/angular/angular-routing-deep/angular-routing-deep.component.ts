import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-angular-routing-deep',
  templateUrl: './angular-routing-deep.component.html',
  styleUrls: ['./angular-routing-deep.component.css']
})
export class AngularRoutingDeepComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  routeData:any
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.routeData = params;
    })
  }

}
