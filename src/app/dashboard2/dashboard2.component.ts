import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../base/dashboard.component';

@Component({
  selector: 'idu-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component extends Dashboard implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
