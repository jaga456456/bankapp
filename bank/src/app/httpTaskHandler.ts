import {Injectable} from '@angular/core';
import { Http, Headers, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class HttpTaskHandler {
    public baseUrl = environment.apiUrl;
    
    constructor(private http: Http) {}

    public createURL(url) {
        return this.baseUrl+url;
    }

    public get(url) {
    return this.http.get(this.createURL(url))
        .map(res=>res.json())
        .catch(this.catchError);
    }

    public post(url,data) {
        return this.http.post(this.createURL(url),data)
        .map(res=>res.json())
        .catch(this.catchError);
    }

    public catchError() {
        return Observable.throw('Something went wrong');
    }
    
}