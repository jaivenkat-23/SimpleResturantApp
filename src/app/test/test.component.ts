import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  links: string[] = ['Red', 'Green', 'yelllow'];

  ngOnInit() {
  }

}
