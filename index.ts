// Message class

export class Message{
    title: string;
    message: string;
    private _isSent: boolean;

    set isSent(value: boolean){
        if(value) this.date = new Date;
        this._isSent = value
    }

    get isSent(){
        return this._isSent;
    }

    date: Date;

    constructor(title: string, message: string){
        this.title = title;
        this.message = message;
        this.isSent = false;
    };

    get messageStatus():string{
        const statusMessage = this.isSent ?'It has been sent' : 'It has not been sent'

        return `${this.message} | ${statusMessage}`;
    };

    previousMessage():string{
        return this.message.slice(0,10).concat('...');
    }
}

const message = new Message(
    'Message One',
    'This is my first message')

message.isSent = true;
message.messageStatus;
message.previousMessage();