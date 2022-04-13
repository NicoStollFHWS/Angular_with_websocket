export class ChatMessageDto {
  user : string;
  method : string;
  message : string;


  constructor(user : string, message : string, method : string) {
    this.user = user;
    this.method = method;
    this.message = message;
  }

}
