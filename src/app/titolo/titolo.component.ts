import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titolo',
  templateUrl: './titolo.component.html',
  styleUrls: ['./titolo.component.scss']
})
export class TitoloComponent implements OnInit {

  @Input() title = 'TITOLO';

  @Input() subtitle = '';


  hasSubtitle() {
    return this.subtitle !== '';
  }

  getColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log("color",color)
    return color;
  }

  constructor() { }

  ngOnInit() {
  }

}
