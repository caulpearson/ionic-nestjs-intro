import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private messages: MessagesService) {}


  ngOnInit(): void {
    let testMessage = {
      content: 'Hello',
      submittedBy: 'Me'
    };
    this.messages.getMessages().subscribe((res) => {
      console.log(res);
    });
    this.messages.getMessage('2463').subscribe((res) => {
      console.log(res);
    });
    this.messages.createMessage(testMessage).subscribe((res) => {
      console.log(res);
    });
  }
}
