import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UnitStatusComponent } from './unit-status/unit-status.component';
import { UnitStatusService } from './unit-status/unit-status.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UnitStatusComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UnitStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
