import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'in-user-name',
  templateUrl: './user-name.component.html',
  styleUrls  : [ './user-name.component.scss' ]
} )
export class UserNameComponent implements OnInit {

  fontColor = 'red';
  fontSize  = 1.2;
  name      = 'Saban Ünlü';

  constructor () {
  }

  ngOnInit () {
  }

}
