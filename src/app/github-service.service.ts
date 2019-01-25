import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Observable, from } from 'rxjs';
import { RepoModule} from './repo/repo.module';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http:Http) {

   }
   getData(){
     return this.http.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc');
   }
}
