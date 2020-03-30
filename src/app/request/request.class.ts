import { User } from 'app/user/user.class';
import { RequestLine } from 'app/request-line/request-line.class';

export class Request {
    id:number = 0;
    description:string;
    justification:string;
    rejectionReason:string;
    deliveryMode:string = "Pickup";
    status:string;
    total:number;
    userId:number = 5; // REMOVE AFTER CREATING LOGIN
    user:User;
    requestlines:RequestLine[];

    constructor() {}
}