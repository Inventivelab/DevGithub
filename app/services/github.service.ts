import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id = 'CLIENT_ID';
  private client_secret = 'CLIENT_SECRET ';

  constructor(private _http: Http){
    console.log('Github Service is ready...');
    this.username = 'saidmaadan';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json())
  }
}

