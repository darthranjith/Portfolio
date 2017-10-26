import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbar') navBar: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  closeNav(){
    this.navBar.nativeElement.classList.remove('ish-nav-on');
  }

}
