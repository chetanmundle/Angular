import { Component, OnInit } from '@angular/core';
// import { Lifecy}

@Component({
  selector: 'app-ng-on-init-hook',
  standalone: true,
  imports: [],
  templateUrl: './ng-on-init-hook.component.html',
  styleUrl: './ng-on-init-hook.component.css',
})
export class NgOnInitHookComponent implements OnInit {
  name: any;
  ngOnInit(): void {
    this.name = 'Chetan Mundle';
  }
}
