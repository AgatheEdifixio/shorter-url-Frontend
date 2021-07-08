import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

urls

  constructor(private http: HttpClient) { }


  createUrl(url: string, name: string){
      const  urlObject = {
      url: '', 
      name: '',
    }; 

    urlObject.url = url;
    urlObject.name = name;
    this.urls = urlObject
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


deleteUrl(id: string) {
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

  getUrl(id: string) {
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

  getNewUrl(id: string) {
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


  getAllUrls() {
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

}
