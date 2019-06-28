import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProjectService {

  constructor(public httpClient: HttpClient) { }

  getProjects(): Observable<any> {
    return this.httpClient.get('http://192.168.146.42:8000/api/projects');
  }


}

