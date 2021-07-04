import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IDLS-tech-task';


  // Create an array to store the list of png images
  imList: string[] =[];

  // push the image link to the list 5 times
  constructor() {
    for (let i = 0; i<5; i++) {
      this.imList.push("/assets/images/star.png");
    };
  }

  // Drop event registers object movement from puzzleBoard1 <-> puzzleBoard2
  // As we are only changing between lists we use transferArrayItem. 
  drop(event: CdkDragDrop<string[]>) {
    transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
  }
}

