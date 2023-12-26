import { Component } from '@angular/core';

@Component({
  selector: 'app-vote-component',
  standalone: true,
  imports: [],
  templateUrl: './vote-component.component.html',
  styleUrl: './vote-component.component.css'
})
export class VoteComponentComponent {
votes=0
upVote(){this.votes++;}
downVote(){this.votes--;}
}
