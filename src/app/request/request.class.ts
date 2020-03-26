import { User } from 'app/user/user.class';
import { RequestLine } from 'app/request-line/request-line.class';

export class Request {
    id:number = 0;
    description:string;
    justification:string;
    rejectionReason:string;
    deliveryMode:string;
    status:string;
    total:number;
    userId:number;
    user:User;
    requestLines:RequestLine[];

    constructor() {}
}