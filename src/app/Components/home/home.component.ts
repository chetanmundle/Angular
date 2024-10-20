import { Component, inject, OnInit } from '@angular/core';
import { CountryService } from '../../Services/country.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, JsonPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.getAllContries();
  }
  private countryService = inject(CountryService);

  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];
  Data: any = {
    country: '',
    state: '',
    city: '',
  };

  onChangeState() {
    this.Data.city = '';
    this.countryService.getAllCity(this.Data.state).subscribe({
      next: (res: any) => {
        this.cities = res;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  onCountryChange() {
    this.Data.state = '';
    this.Data.city = '';
    this.countryService.getAllStates(this.Data.country).subscribe({
      next: (res: any) => {
        this.states = res;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }

  getAllContries() {
    this.countryService.getCountries().subscribe({
      next: (res: any) => {
        this.countries = res;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });
  }
}
