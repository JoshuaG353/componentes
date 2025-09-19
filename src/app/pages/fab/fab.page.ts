import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
  standalone: false
})
export class FabPage implements OnInit {

  data = Array(100);

  constructor() { }

  ngOnInit() {
  }

}
