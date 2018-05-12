import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-torment',
  templateUrl: './torment.component.html',
  styleUrls: ['./torment.component.css']
})
export class TormentComponent implements OnInit {

  curseThreshold = 5;

  isCursed = false;

  clickNum = 0;
  clicks = [];

  onTorment(): void {
    this.isCursed = !this.isCursed;
    this.clicks.push(++this.clickNum);
  }

  constructor() { }

  ngOnInit() {
  }

}
