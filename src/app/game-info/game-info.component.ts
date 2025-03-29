import { Component, Input, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent {
  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: 'Choose a word. In a clockwise direction, the other players have to find a rhyme for it. If you repeat a word or cant name a new rhyme, you have to take a drink.' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: 'The person who draws a jack may come up with a new rule that applies until the end of the game.' },
    { title: 'Never have i ever...', description: 'Say something you nnever did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ];

  title = '';
  description = '';
  @Input() card: string | undefined;

  ngOnChanges(): void {
    if (this.card) {
      let activeCardNumber: number = +this.card.split('_')[1];
      this.title = this.cardAction[activeCardNumber -1].title;
      this.description = this.cardAction[activeCardNumber -1].description;    
    }
  }
}
