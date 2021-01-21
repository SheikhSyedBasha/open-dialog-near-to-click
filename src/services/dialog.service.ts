import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModel } from 'src/models/mat-dialog.model';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    constructor(public dialog: MatDialog) { }
    public openDialog(matModel: MatDialogModel): MatDialogRef<DialogComponent> {
        if (!matModel.height) { matModel.height = 'auto'; }
        if (!matModel.width) { matModel.width = 'auto'; }
        if (!matModel.hasbackdrop) { matModel.hasbackdrop = false; }
        const dialogRef: MatDialogRef<DialogComponent> =
            this.dialog.open(DialogComponent, {
                hasBackdrop: matModel.hasbackdrop,
                height: matModel.height,
                width: matModel.width,
                panelClass: matModel.panelClass,
                data: { positionRelativeToElement: matModel.element }
            });
        return dialogRef;
    }
}
