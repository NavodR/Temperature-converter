import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';
//import { Http } from '@angular/http';
import { TempretureSet } from '../interfaces/tempretureset';

@Component({
  selector: 'app-tempreture-data',
  templateUrl: './tempreture-data.component.html',
  styleUrls: ['./tempreture-data.component.css']
})

export class TempretureDataComponent {
  public tempretureSet: TempretureSet[];

 // tempretureSet: TempretureSet[];
  temperatureKelvin = 0;
  temperatureFahrenheit = 0;
  temperatureCelsius = 0;


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }
   
  onSearchChange(searchValue: number, type: string ): void {
    console.log(searchValue);
    let params = new HttpParams().set('temperature', JSON.stringify(searchValue.toString()))
      .set('type', type);

    console.log()
   
    
    //This Server call must bring in to service
    this.http.get<TempretureSet[]>(this.baseUrl + 'api/Tempreture/TempretureCalculater', {params}).subscribe(result => {
      this.tempretureSet = result;
    }, error => console.error(error));

    this.getTempratureData(params);



    //this.heroService.getHeroes(hero?:  TempretureSet)
    //  .subscribe(heroes => this.heroes = heroes);



  }






  //ngOnInit() {
  //  this.getTempratureData(this.params);
  //}



  getTempratureData(params): void {
    this.http.get<TempretureSet[]>(this.baseUrl + 'api/Tempreture/TempretureCalculater', {params}).subscribe(result => {
      this.tempretureSet = result;
    }, error => console.error(error));
  }

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<TempretureSet[]>(baseUrl + 'api/Tempreture/TempretureCalculater', {}).subscribe(result => {
  //    this.tempretureSet = result;
  //  }, error => console.error(error));
  //}

  //getHeroes(): void {
  //  this.heroService.getHeroes()
  //    .subscribe(heroes => this.heroes = heroes);
  //}




  //constructor(private _httpService: HttpClient) { }
  //accessPointUrl: string = 'https://localhost:44356/api/SampleData';

  //ngOnInit() {
  //  this._httpService.get(this.accessPointUrl).subscribe(values => {
  //    this.tempretureSet = values;
  //  });
  //}
}


