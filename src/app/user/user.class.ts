export class User {
    id:number = 0;
    firstName:string;
    lastName:string;
    username:string;
    password:string = "#temp-password#";
    phone:string;
    email:string;
    isReviewer:boolean = false;
    isAdmin:boolean = false;

    constructor() {}
}