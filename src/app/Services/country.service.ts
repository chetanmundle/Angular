import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  //   Universal Totorial.Com
  //   website - https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city
  // api token - 4GiWd2S7G3i-QR4KLPZUodNksNBtSmMIqTfj7d0XC05xzQ1bMkR9kfCQyT9zQWWP1RI

  token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJjaGV0YW5tdW5kbGU3ODc1QGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IjRHaVdkMlM3RzNpLVFSNEtMUFpVb2ROa3NOQnRTbU1JcVRmajdkMFhDMDV4elExYk1rUjlrZkNReVQ5elFXV1AxUkkifSwiZXhwIjoxNzI5NTMxNDE5fQ.1IZ8BW1i74DfWk59Apdy31JraBQAoqaTEzD4-GPego8';

  getCountries() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get('https://www.universal-tutorial.com/api/countries', {
      headers,
    });
  }

  getAllStates(country: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get(
      `https://www.universal-tutorial.com/api/states/${country}`,
      { headers }
    );
  }

  getAllCity(state: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get(
      `https://www.universal-tutorial.com/api/cities/${state}`,
      { headers }
    );
  }
}
