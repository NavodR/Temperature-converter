import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { TempData } from '../interfaces/tempData';

@Inject({
  providedIn: 'root'
})

export class TempService {

  constructor(private httpService: HttpClient) { }
  
  public getData = (iTemp: TempData) => {
    let params = new HttpParams().set('temperature', iTemp.temperature).set('type', iTemp.type)

    return this.httpService.get(iTemp.url, { params } );
  }
}
