import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitStatus } from './unit-status';
import { UnitStatusService, IUnitStatus } from './unit-status.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unit-status',
  templateUrl: './unit-status.component.html',
  styleUrls: ['./unit-status.component.css']
})
export class UnitStatusComponent implements OnInit {

  constructor(private fb:FormBuilder, private unitStatusService:UnitStatusService) { }
  public errorMessage:string;
  subjectObserved:IUnitStatus[] = [];
  
  myForm:FormGroup = this.fb.group({
    unitStatusArray : this.fb.array([])
  })

  ngOnInit(): void {
    this.unitStatusService.getUnitStatusObs$().subscribe(value => {
      this.subjectObserved = JSON.parse(JSON.stringify(value))}
    );

    this.unitStatusService.findAll().subscribe(data => {
      this.unitStatusService.setUnitStatusObs(data);
      
      for (let i=0; i<this.subjectObserved.length; i++) {
        this.unitStatusArray.push(this.fb.group({
          tid:[this.subjectObserved[i].tid, Validators.required],
          name:[this.subjectObserved[i].name, Validators.required]
         }))
      }
    });

  }

  get unitStatusArray(): FormArray {
    return this.myForm.get('unitStatusArray') as FormArray;
  }

  addStatus() {
    this.unitStatusArray.push(this.fb.group({
     name:['', Validators.required],
     tId:['dummy', Validators.required]
    }));
  }

  remove(i:number) {
    let o = this.unitStatusArray.at(i).value;
    this.unitStatusService.remove(o.tid);
    this.unitStatusArray.removeAt(i);
  }
}
