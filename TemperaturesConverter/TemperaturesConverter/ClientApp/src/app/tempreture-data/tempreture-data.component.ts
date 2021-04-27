import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { TempretureSet } from '../interfaces/tempretureset';
import { TempData } from '../interfaces/tempData';
import { TempService } from '../services/tempService';

@Component({
  selector: 'app-tempreture-data',
  templateUrl: './tempreture-data.component.html',
  styleUrls: ['./tempreture-data.component.css']
})

export class TempretureDataComponent {

  public tempretureSet: TempretureSet[] = [];
 

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,
    private tempService: TempService) { }

  public iTemp = <TempData>{}

  onTempChange(searchValue: number, type: string ): void {
   
    this.iTemp.temperature = searchValue.toString();
    this.iTemp.type = type;
    this.iTemp.url = this.baseUrl + 'api/Tempreture/TempretureCalculater';

    //Call Temp Service
    this.tempService.getData(this.iTemp)
      .subscribe((result) => {
        this.tempretureSet = result as TempretureSet[];
      },
      (error) => {
        console.error(error);
      });

  }
  
}


