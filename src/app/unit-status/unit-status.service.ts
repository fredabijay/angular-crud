import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { UnitStatus } from './unit-status';

@Injectable({
  providedIn: 'root'
})
export class UnitStatusService {
  private URL = 'http://localhost:8080/status';
  status:string;
  myArray:IUnitStatus[] = [];
  unitStatusObs$:BehaviorSubject<IUnitStatus[]> = new BehaviorSubject<IUnitStatus[]>(this.myArray);
 
  constructor(private http:HttpClient) { }

  getUnitStatusObs$():Observable<{}> {
    return this.unitStatusObs$.asObservable();
  }

  setUnitStatusObs(arrs:IUnitStatus[]) {
    this.unitStatusObs$.next(arrs);
  }

  public findAll():Observable<UnitStatus[]> {
    return this.http.get<IUnitStatus[]>(this.URL);
  }

  public remove(id: string):void {
    let deleteURL:string = this.URL + "/" + id;
    console.log(deleteURL);
    this.http.delete(deleteURL).subscribe(() => this.status = 'Delete successful');
  }
}

export interface IUnitStatus {
  tid:number;
  name:string
}