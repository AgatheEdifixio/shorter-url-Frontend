import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UrlsService } from '../services/urls.service';
import { Url } from '../models/Url.model';
import { async } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resultfromAPI 
  public urlAgathe: Url[] = [];
  public url : Url;
  a: any;
  bigUrl: any; 
  shortUrl: any;

  constructor(  
    private urlsService: UrlsService,
  ) {   }

  ngOnInit(): void {
    //this.displayUrls(); quand arrive sur home 2 cas : url pas d'id => affiche formulaire 
    //cas 2 id dans url => refaire redirection : request back avec id : recup vrai url 

  }


  async onSubmit(form: NgForm){
    console.log("onSubmit() form", form.value);
    const name = form.value['name'];
    const url = form.value['url'];
    const result = await this.urlsService.createUrl(url, name);
    console.log("result", result);
    
    const shortIdabc = result['shortId']
    console.log("shortIdabc result['shortId']", shortIdabc);

    this.bigUrl = result['url'];
/*     http://${req.headers.host}/${result.shortId}
    const ae = req.headers.host */
    this.shortUrl = 'http://localhost:4200/' + shortIdabc;
    console.log("this.shortUrl]", this.shortUrl);


   }


}
