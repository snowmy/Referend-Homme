import { Component, OnInit } from '@angular/core';
import {ApiVoteService} from "../app-vote.service";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})

export class VoteComponent implements OnInit {

  votes;
  cptVote;

  constructor(public apiVote: ApiVoteService) {
  }

  ngOnInit() {
    this.apiVote.getVotes().subscribe(result => {
      this.votes = result['hydra:member'];
      console.log(result);
    })
  }

  compteurVote()
  {
      this.cptVote += 1;
  }
}
