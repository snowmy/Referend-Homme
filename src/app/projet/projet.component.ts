import { Component, OnInit } from '@angular/core';
import { ApiProjectService } from '../api-project.service'

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  myapicall;
  project;


  constructor(public apiProject: ApiProjectService) { }

  ngOnInit() {
    this.apiProject.pouet(this.project).subscribe(result => {
      this.myapicall = result['hydra:member'];
      console.log(result);
    })
  }

}
