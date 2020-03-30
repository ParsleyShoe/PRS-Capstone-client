import { Product } from 'app/product/product.class';
import { Request } from 'app/request/request.class';

export class RequestLine {
    id:number = 0;
    productId:number;
    requestId:number;
    quantity:number = 1;
    product:Product;
    request:Request;

    constructor() {}
}