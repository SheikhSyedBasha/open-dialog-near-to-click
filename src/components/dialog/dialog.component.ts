import { Component, ElementRef, Inject, OnInit } from '@angular/core'
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  private relativeElement: ElementRef;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public options: { positionRelativeToElement: ElementRef }) {
    this.relativeElement = options.positionRelativeToElement;
  }

  ngOnInit(): void {
    const matDialogConfig = new MatDialogConfig();
    const rect: DOMRect = this.relativeElement.nativeElement.getBoundingClientRect();
    matDialogConfig.position = { top: rect.top + 'px', left: rect.right + 10 + 'px' };
    // above left can be change based on our requirement
    // above top can be change based on our requirement
    this.dialogRef.updatePosition(matDialogConfig.position);
  }
}