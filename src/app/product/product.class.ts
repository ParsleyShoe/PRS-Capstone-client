import { Vendor } from '../vendor/vendor.class';

export class Product {
    id:number = 0;
    partNumber:string;
    name:string;
    price:number;
    unit:string = "Each";
    photoPath:string;
    vendorId:number;
    vendor:Vendor;

    constructor() {}
}