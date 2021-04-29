import { HostListener, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'box-generator';
  boxes = [];
  i = 0;
  elements;
  selectedIndex: any;
  isListenerOn: boolean = false;
  containerDiv;
  selectedBox;
  abc;

  createBoxes(event) {
    this.boxes.push(this.i++);
  }

  selectBox(box, event) {
    this.elements = event.target.style;
    this.selectedIndex = box;
    this.abc=event
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    let modifier = 1;
    if (!this.elements.top) {
      this.elements.top = 0;
    }
    if (!this.elements.left) {
      this.elements.left = 0;
    }
    this.containerDiv = document.querySelector('.grid-container').getBoundingClientRect();
    this.selectedBox = document.querySelector('.square.highlight').getBoundingClientRect();
    if (this.isListenerOn) {
      switch (event.key) {
        case 'ArrowUp': 
        if(this.selectedBox.top > this.containerDiv.top + modifier){
        this.elements.top = `${parseInt(this.elements.top) - modifier}px`;
        }
          break;
        case 'ArrowLeft': 
        if(this.selectedBox.left > this.containerDiv.left + modifier){
          this.elements.left = `${parseInt(this.elements.left) - modifier}px`;
        }
          break;
        case 'ArrowRight': 
        if(this.selectedBox.right < this.containerDiv.right - modifier){
        this.elements.left = `${parseInt(this.elements.left) + modifier}px`;
        }
          break;
        case 'ArrowDown': 
        if(this.selectedBox.bottom < this.containerDiv.bottom - modifier){
        this.elements.top = `${parseInt(this.elements.top) + modifier}px`;
        }
          break;
        case 'Backspace': this.elements.display = 'none';
      }
    } else {
      return
    }


  }
  constructor() { }
}
