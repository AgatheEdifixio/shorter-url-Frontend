import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UrlsService } from '../services/urls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  bigUrl: any;
  shortUrl: any;

  constructor(
    private urlsService: UrlsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        url: ['', Validators.required],
      })

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    const name = this.form.value['name'];
    const url = this.form.value['url'];
    const result = await this.urlsService.createUrl(url, name);

    const shortId = result['shortId']
    this.bigUrl = result['url'];

    const host = window.location.host;
    this.shortUrl = 'http://' + host + '/' + shortId;
  }
}
