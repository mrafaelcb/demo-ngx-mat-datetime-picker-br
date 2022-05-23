import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('picker') picker: any;

  public date: moment.Moment;

  public formGroup = new FormGroup({
    date: new FormControl(null, [Validators.required]),
  });

  constructor(private http: HttpClient, private zone: NgZone) {}

  ngOnInit() {}

  closePicker() {
    this.picker.cancel();
  }
}
