import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  public country?: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  //De esta manera tenemos un subscribe hell
  /* ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      //console.log({ params: id });

      this.countriesService
        .searchCountryByAlphaCode(id)
        .subscribe((country) => {
          console.log(country);
        });
    });
  } */

  // opcion para arreglar ese subscribe hell
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        //console.log({ country });
        if (!country) {
          return this.router.navigateByUrl('');
        }

        return (this.country = country);
      });
  }
}
