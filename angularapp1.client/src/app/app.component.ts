import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isGroup1Collapsed = false;
  isGroup2Collapsed = true;
  isGroup3Collapsed = true;
  ngOnInit() {
    document.getElementById('menu-toggle')?.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('wrapper')?.classList.toggle('toggled');
    });
  }
}
