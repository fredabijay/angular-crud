import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  constructor(private fb: FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
  }

  form = this.fb.group({
    "name": ["", Validators.required]
  })

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }; 

    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    
    this.http
    .post('http://localhost:8080/status_add', JSON.stringify(Object.fromEntries(formData)), httpOptions)
    .subscribe({
      next:(response) => console.log(response),
      error: (error) => console.log(error),
    });
    this.form.reset();
  }
}
