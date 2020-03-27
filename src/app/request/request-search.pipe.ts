import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests:Request[], searchCriteria:string = "".toLowerCase()):Request[] {
    if (searchCriteria === "") return requests;
    let selectedRequests:Request[] = [];
    for (let request of requests) {
      if (
        request.id.toString().includes(searchCriteria)
        || request.description.toLowerCase().includes(searchCriteria)
        || request.justification.toLowerCase().includes(searchCriteria)
        || request.deliveryMode.toLowerCase().includes(searchCriteria)
        || request.status.toLowerCase().includes(searchCriteria)
        || request.user.firstName.toLowerCase().includes(searchCriteria)
        || request.user.lastName.toLowerCase().includes(searchCriteria)
      ) selectedRequests.push(request);
    }
    return selectedRequests;
  }

}
