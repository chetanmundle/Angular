import { Component } from '@angular/core';
import { SubjectService } from '../../Services/SubjectService/subject.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currRole: string = '';
  selectedBehavioral: string = '';

  //  in this constructor we simple subscribe to this and get the role of that perticular  user

  constructor(private subjectService: SubjectService) {
    this.subjectService.onRoleChange$.subscribe((role: string) => {
      debugger;
      this.currRole = role;
    });

    this.subjectService.roll$.subscribe((res: string) => {
      this.selectedBehavioral = res;
    });
  }
}
