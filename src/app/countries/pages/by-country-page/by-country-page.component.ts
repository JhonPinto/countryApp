import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}

  searchByPais(terminoBusquedaDesdeHijo: string) {
    this.countriesService
      .searchCountry(terminoBusquedaDesdeHijo)
      .subscribe((countries) => (this.countries = countries));
  }
}
