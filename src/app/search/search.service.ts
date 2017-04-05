import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class SearchService {
  private url: string = "https://api.nytimes.com/";
  private token: string = "8321b3584be24f03baeaabda8cb15892";

  constructor(private http: Http) { }

  getArticles(query){
    return this.http.get(this.url + '/svc/search/v2/articlesearch.json?q='+ query +'&amp;api-key=' + this.token)
      .map(res => res.json());
  }
}
