import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  game: Game;
  takeCardAnimation = false;
  currentCard: string | undefined = '';

  constructor() {
    this.game = new Game();
  }
  takeCard() {
    if (!this.takeCardAnimation) { 
      this.currentCard = this.game.stack.pop();
      this.takeCardAnimation = true;
      setTimeout(()=>{
        this.takeCardAnimation = false;
        if (this.currentCard) {
          this.game.playedCards.push(this.currentCard);
        }
      },1500)
    }
  }



}
