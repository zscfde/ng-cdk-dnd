import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-cdk-drag-drop',
  templateUrl: 'cdk-drag-drop.html',
  styleUrls: ['cdk-drag-drop.css'],
})
export class CdkDragDropComponent {
  row0 = [{ id: '1', row: 0, column: 0 }, { id: '2', row: 0, column: 1 }];
  row1 = [{ id: '3', row: 1, column: 0 }];
  rows = [this.row0, this.row1];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
