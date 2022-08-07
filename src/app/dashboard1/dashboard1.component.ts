import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../base/dashboard.component';

@Component({
  selector: 'idu-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component extends Dashboard implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
