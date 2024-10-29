import { Component, computed, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  firstName = signal('Chetan');
  lastName = signal('Mundle');

  city = signal(['pune', 'Nagpur']);
  data = signal({
    name: 'Chetan',
    city: 'Nagpur',
  });

  // Normal cannot be change when firstname or lastname is change but computed is change when  any of the signals is change

  fullName = computed(() => this.firstName() + '  ' + this.lastName());
  fullNameNormal = this.firstName() + '  ' + this.lastName();

  onChangeFirstName() {
    this.firstName.set('Rahul');
  }
  onChangeLastName() {
    this.lastName.set('Sharma');
  }

  onClickAddCity() {
    this.city.set([...this.city(), 'Mumbai']);
  }

  onClickChangeCity() {
    this.data.set({ ...this.data(), city: 'Pune' });
  }
}
