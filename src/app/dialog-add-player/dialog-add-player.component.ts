import { ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { PlayerModel } from '../../models/player.model';

@Component({
  selector: 'app-dialog-add-player',
  imports: [    
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelectModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {

  selectedValue!: string;
  selectedColor = "black" ;
  
  colors = [
    {value: '#1761AC', viewValue: 'Blue'},
    {value: '#A72527', viewValue: 'Red'},
    {value: '#FD9230', viewValue: 'Orange'},
    {value: '#0E7035', viewValue: 'Green'},
    {value: '#824080', viewValue: 'Lila'},
    {value: '#6F4F28', viewValue: 'Olive'},
  ];


  readonly dialogRef = inject(MatDialogRef<DialogAddPlayerComponent>);
  readonly data = inject<PlayerModel>(MAT_DIALOG_DATA);
  readonly name = model(this.data.name);
  readonly color = model(this.data.color);


  onNoClick(): void {
    this.dialogRef.close();
  }

  selectedColorCss(): string {
    const selected = this.colors.find(this.color);
  console.log(selected);
    return "blue";
  }

  changecolor(color: string) {
    this.selectedColor = color
  }

}
