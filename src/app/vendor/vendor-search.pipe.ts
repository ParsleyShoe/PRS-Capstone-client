import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors:Vendor[], searchCriteria:string = "".toLowerCase()):Vendor[] {
    if (searchCriteria === "") return vendors;
    let selectedVendors:Vendor[] = [];
    for (let vendor of vendors) {
      if (
        vendor.id.toString().includes(searchCriteria)
        || vendor.code.toString().includes(searchCriteria)
        || vendor.name.toLowerCase().includes(searchCriteria)
        || vendor.address.toLowerCase().includes(searchCriteria)
        || vendor.city.toLowerCase().includes(searchCriteria)
        || vendor.state.toLowerCase().includes(searchCriteria)
        || vendor.zip.toString().includes(searchCriteria)
        || (vendor.email != null && vendor.email.toLowerCase().includes(searchCriteria))
        || (vendor.phone != null && vendor.phone.toString().includes(searchCriteria))
      ) selectedVendors.push(vendor);
    }
    return selectedVendors;
  }

}
