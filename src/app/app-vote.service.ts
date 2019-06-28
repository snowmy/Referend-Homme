import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiVoteService {

    constructor(public httpClient: HttpClient) { }

    getVotes(): Observable<any> {
        return this.httpClient.get('http://192.168.146.37:8000/api/votes');
    }


}

