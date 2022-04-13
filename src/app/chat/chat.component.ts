import { chainedInstruction } from '@angular/compiler/src/render3/view/util';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from '../model/chatMessageDto';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy{

  constructor(public webSocketService: WebSocketService) { }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  sendMessage(sendForm : NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message, "CREATE_GAME")
    this.webSocketService.sendMessage(chatMessageDto);
  }

}
