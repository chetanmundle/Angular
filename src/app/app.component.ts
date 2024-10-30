import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SubjectService } from './Services/SubjectService/subject.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedRole: string = '';
  title = 'Subject_BehaviorSubject';

  constructor(private subjectService: SubjectService) {}

  // this fuction will call when the role is change and then it emite the value of role to subject whihc is present in the Service Layer
  onRoleChange(role: string) {
    // console.log(event);
    debugger;
    this.subjectService.onRoleChange$.next(role);
    this.subjectService.roll$.next(role);
  }
}
