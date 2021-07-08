import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlsService } from '../services/urls.service';

@Component({
  selector: 'app-list-url',
  templateUrl: './list-url.component.html',
  styleUrls: ['./list-url.component.css']
})
export class ListUrlComponent implements OnInit {

  resultfromAPI

  constructor(
    private urlsService: UrlsService,
    private router: Router,) { }

  ngOnInit(): void {
    this.displayUrls()
  }

  async displayUrls() {
    const result = await this.urlsService.getAllUrls();
    this.resultfromAPI = result;
  }

  onUrlClicked(id: string) {
    this.router.navigate(['/myurl/' + id]);
  }


}
