import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-angular-notifier-test',
  templateUrl: './angular-notifier-test.component.html',
  styleUrls: ['./angular-notifier-test.component.css']
})
export class AngularNotifierTestComponent implements OnInit {

  private readonly notifier:NotifierService
  constructor(private notifierService: NotifierService) {
    this.notifier = notifierService;
   }

   hideAll(){
     this.notifier.hideAll()
   }

  ngOnInit(): void {
    this.notifier.notify('success', 'You are awesome! I mean it!');
    this.notifier.notify('success', 'You are awesome! I mean it!');
    this.notifier.notify('success', 'You are awesome! I mean it!');
    this.notifier.notify('success', 'You are awesome! I mean it!');
    this.notifier.notify('success', 'You are awesome! I mean it!');
  }

}
