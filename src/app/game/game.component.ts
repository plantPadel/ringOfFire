import { CommonModule } from '@angular/common';
import { Component, inject, model, signal } from '@angular/core';
import { Game } from '../../models/game';
import { timeout } from 'rxjs';
import { PlayerComponent } from "../player/player.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { PlayerModel } from '../../models/player.model';

@Component({
  selector: 'app-game',
  imports: [CommonModule, PlayerComponent, MatSlideToggleModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  game: Game;
  newPlayer!: PlayerModel;
  playerCounter = 0;
  takeCardAnimation = false;
  currentCard: string | undefined = '';
  readonly dialog = inject(MatDialog);

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {
      data: {name: this.newPlayer},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.game.players.push(result);
      }
    });
  }

}
