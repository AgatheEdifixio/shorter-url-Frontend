import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlsService } from '../services/urls.service';

@Component({
  selector: 'app-redirect-comp',
  templateUrl: './redirect-comp.component.html',
  styleUrls: ['./redirect-comp.component.css']
})
export class RedirectCompComponent implements OnInit {

  constructor(
    private urlsService: UrlsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  async ngOnInit(): Promise<void> {

    const id = this.route.snapshot.paramMap.get('id');
    const result: any = await this.getNewUrl(id);

    if (result) {
      window.open(result.url);
      this.router.navigate(['/myurl/' + id]);
    } else {
      console.log("pas d'url correspondant");
    }
  }

  async getNewUrl(id: string) {
    const result = await this.urlsService.getUrl(id);
    return result;
  }

}


