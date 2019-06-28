import {Component, Input, OnInit} from '@angular/core';
import { ApiProjectService } from '../api-project.service'

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  projects;
  cptVote;
 // @Input() vote: object;


  constructor(public apiProject: ApiProjectService) { }

  ngOnInit() {
    this.apiProject.getProjects().subscribe(result => {
      this.projects = result['hydra:member'];
      console.log(result);
    })
  }

  addNewVote()
  {
    this.cptVote += 1;
  }

}
