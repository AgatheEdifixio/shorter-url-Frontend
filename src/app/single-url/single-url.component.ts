import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlsService } from '../services/urls.service';
import { Url } from '../models/Url.model';

@Component({
  selector: 'app-single-url',
  templateUrl: './single-url.component.html',
  styleUrls: ['./single-url.component.css']
})
export class SingleUrlComponent implements OnInit {

  public url: Url;
  shortUrl: any;

  constructor(
    private urlsService: UrlsService,
    private route: ActivatedRoute,
    private router: Router,) { }

   async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.params['id'];
    console.log("this.name", id);

    const result: any = await this.getUrl(id);
    console.log(" asyncngonitnit ", result);

  }

  async getUrl(id: string) {
    console.log(" async getNewUrl(id: string){ + ", id)
    const result = await this.urlsService.getUrl(id).then(
      (url: Url) => {
        this.url = url
      }
    );

    const shortId = this.url.shortId
    //console.log("shortIdabc ", shortId)
    const host = window.location.host;
    this.shortUrl = 'http://' + host + '/' + shortId;
  /*   this.shortUrlx = 'http://localhost:4200/' + shortIdabc; */
    return result;
    // this.resultfromAPI = result;
  }

  async delete(id: string){
    console.log("delete(id: string)", id);
    await this.urlsService.deleteUrl(id).then(
      () => {
        //mettre un bandeau d'erreur avec un event emiter 
        console.log("element supprimé");
      }

    )
      this.router.navigate(['/myurls']);
  }  

 
  
  async shortUrlx() {
    console.log(" shortUrlx + ");
    const id = this.route.snapshot.params['id'];
    const result = await this.urlsService.getNewUrl(id);
    console.log("result getNewUrl ", result)
    if(result){
      console.log("   if(result)",result.url);
      window.open(result); 
} else {
  console.log("pas d'url correspondant");
}
    return result;


    // this.resultfromAPI = result;
  }


}
