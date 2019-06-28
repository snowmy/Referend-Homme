import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {ApiVoteService} from "../app-vote.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})

export class VoteComponent implements OnInit {

  votes = []
  cptVote;
  @Output() newVote = new EventEmitter<string>();


  constructor(public apiVote: ApiVoteService) {
  }

  ngOnInit() {
    this.apiVote.getVotes().subscribe(result => {
      this.votes = result['hydra:member'];
      console.log(result);
    })
    console.log(this.votes)
  }

 /* compteurVote()
  {
      this.cptVote += 1;
  } */

  addNewVote()
  {
    this.newVote.emit();
  }
}
