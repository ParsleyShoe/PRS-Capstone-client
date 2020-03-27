import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users:User[], searchCriteria:string = "".toLowerCase()):User[] {
    if (searchCriteria === "") return users;
    let selectedUsers:User[] = [];
    for (let user of users) {
      if (
        user.id.toString().includes(searchCriteria)
        || user.firstName.toLowerCase().includes(searchCriteria)
        || user.lastName.toLowerCase().includes(searchCriteria)
        || user.username.toLowerCase().includes(searchCriteria)
        || (user.email != null && user.email.toLowerCase().includes(searchCriteria))
        || (user.phone != null && user.phone.toString().includes(searchCriteria))
      ) selectedUsers.push(user);
    }
    return selectedUsers;
  }

}
