import { ElementRef } from '@angular/core';

export class MatDialogModel {
    public element: ElementRef;
    public hasbackdrop?: boolean;
    public height: string;
    public width: string;
    public panelClass?: string;
}
