import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from '../models/Url.model';
/* import { Subject } from 'rxjs'; */

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

urls
urlsFromAPI = Url;
urlAPI = [];

/* a */
public r = new Url;

  constructor(private http: HttpClient) { }


  //create URL 
  createUrl(url: string, name: string){
    console.log("------------createURL service-------------- + url", url);
    const  urlObject = {
      url: '', 
      name: '',
    }; 

    urlObject.url = url;
    urlObject.name = name;
    this.urls = urlObject
   /*  console.log("this.urls", this.urls); */
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/create', this.urls).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });

  }

  //delete url 
deleteUrl(id: string) {
/*   const a = id; */
  console.log("-------service deleteUrl(id: string)----------- + id", id)
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/api/url/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  //get object url by id 
  getUrl(id: string) {
    console.log("---service  getUrl(id: string)", id)
    return new Promise<any>((resolve, reject) => {
      this.http.get('http://localhost:3000/api/url/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  //meme qu'au dessus : faire ménage 
/*   getUrlById(id: string) {
    console.log("---service--- getUrlbyId + id", id);
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/urlbyid/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  } */

  //get object new url => redirection to big url
  getNewUrl(id: string) {

    console.log("---service  getUrl(id: string)", id)
    return new Promise<any>((resolve, reject) => {
      this.http.get('http://localhost:3000/api/newUrl/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

// display all Url

  getAllUrls() {
    console.log("getAllUrls() service");
   return new Promise((resolve, reject) => {
    this.http.get('http://localhost:3000/api/allUrls').subscribe(res => {
      console.log("res", res);
      resolve(res);
    }, error => {
   reject(error);
   console.log(error);
    })
   })
  } 




/* 
  getThingById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/stuff/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  } */


 /*  addUrll(url: string){
    const  urlObject = {
      id: 0, 
      url: ''
    }; 

    urlObject.url = url;
    this.urls = urlObject
    console.log("this.urls", this.urls);
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/stuff', this.urls).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });

  } */

  
/*   getUrlwwws() {
    console.log("getStuff() service");
   return new Promise((resolve, reject) => {
    this.http.get('http://localhost:3000/:shortId').subscribe(res => {
      console.log("res", res);
      resolve(res);
    }, error => {
   reject(error);
   console.log(error);
    })
   })
  }  */


}
