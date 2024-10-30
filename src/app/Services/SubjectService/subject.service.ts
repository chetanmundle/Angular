import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  // Here  we are creating a subject which is a type of observable and Value come here when from somewhere emits some value to this servie and anyone can get the value of that subject eg. any componet  can get the value of that subject
  // When the userchange subject will update on all the component which the bellow observable is subscribe only that which loaded if any component not load then it will not assign the value
  public onRoleChange$: Subject<string> = new Subject<string>();

  public roll$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}
}
