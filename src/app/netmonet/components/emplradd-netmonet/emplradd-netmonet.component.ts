import { Component, OnInit } from '@angular/core';
import { EmpladdNetmonetService } from '../../services/empladd-netmonet.service';


@Component({
  selector: 'app-emplradd-netmonet',
  templateUrl: './emplradd-netmonet.component.html',
  styleUrls: ['./emplradd-netmonet.component.css']
})
export class EmplraddNetmonetComponent implements OnInit {

  User: any;
  EmpladdNetmonetService: any;


  constructor() { }

  saveUser() {
    if(this.User) {
      this.EmpladdNetmonetService.saveUser(this.User);
      this.User = '';
    } else {
      alert ('Please add smthng')
    }
  }

  ngOnInit(): void {
  }

}
