import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {
  NgxMatMomentModule,
  NgxMatMomentAdapter,
  NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular-material-components/moment-adapter';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  NGX_MAT_DATE_FORMATS,
  NgxMatDateAdapter,
} from '@angular-material-components/datetime-picker';

export const CUSTOM_MOMENT_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY HH:mm:ss',
  },
  display: {
    dateInput: 'DD/MM/YYYY HH:mm:ss',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatMomentModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS,
      useValue: { useUtc: true },
    },
    { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_MOMENT_FORMATS },
    { provide: NgxMatDateAdapter, useClass: NgxMatMomentAdapter },
  ],
})
export class AppModule {}
