import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';




@Component({
  selector: 'app-emplrlist-netmonet',
  templateUrl: './emplrlist-netmonet.component.html',
  styleUrls: ['./emplrlist-netmonet.component.css']
})
export class EmplrlistNetmonetComponent implements OnInit {

  list: User[] = [];

  constructor() { }

  ngOnInit(): void {
    const userA: User = {
      name: 'Ann',
      surname: 'Freid',
      tel: '+7999123123'
    }
    this.list.push(userA);

    const userB: User = {
      name: 'Anna',
      surname: 'Qwerty',
      tel: '+7999123432'
    }
    this.list.push(userB);

    const userC: User = {
      name: 'Alla',
      surname: 'Qergs',
      tel: '+7999688894'
    }
    this.list.push(userB);
  }

}
