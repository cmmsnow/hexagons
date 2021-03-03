import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  selectedHex!: string;

  constructor() {
    this.selectedHex = 'Select a hex!';
  }

  ngOnInit(): void {
  }

  onClick(hex: string): void {
    this.selectedHex = hex;
  }

}
