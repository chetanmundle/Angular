import { Component } from '@angular/core';
import { SubjectService } from '../../Services/SubjectService/subject.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  selectedRoll: string = '';
  selectedBehavioral: string = '';
  constructor(private subjectService: SubjectService) {
    this.subjectService.onRoleChange$.subscribe((res: string) => {
      this.selectedRoll = res;
    });
    this.subjectService.roll$.subscribe((res: string) => {
      this.selectedBehavioral = res;
    });
  }
}
