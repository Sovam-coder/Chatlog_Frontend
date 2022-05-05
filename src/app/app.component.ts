import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'chat';
  // public newMessage!: string;
  // messageList: any=[];

  constructor(){

  }

ngOnInit(){
  // this.chatService.getNewMessage().subscribe((message: any) => {
  //   if(message!="")
  //   this.messageList.push(message);
   
  // })
}

// sendMessage() {
//   this.chatService.sendMessage(this.newMessage);
//   this.newMessage = '';
// }
}
