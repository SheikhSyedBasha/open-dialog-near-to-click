import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModel } from 'src/models/mat-dialog.model';
import { DialogService } from 'src/services/dialog.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @ViewChild('myButton', { static: false }) public myButtonRef: ElementRef;
  dialogRef: MatDialogRef<any, any>;
  constructor(private dialogService: DialogService) { }

  openDialog(e): void {
    const matModel = new MatDialogModel();
    matModel.element = this.myButtonRef;
    matModel.hasbackdrop = false;
    matModel.panelClass = 'popup-related-container';
    this.dialogRef = this.dialogService.openDialog(matModel);
    this.dialogRef.afterClosed().subscribe(
      (result) => {
        // For data
        // const data = result.data;
      }
    );
  }

}
