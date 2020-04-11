import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  @Input() readOnly: boolean;
  @Input() average: number = 0;
  @Output() newNote: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  public changeNote(note): void {
    if(!this.readOnly) {
      this.newNote.emit(note);
      this.average = note;
    }
  }

  ngOnInit() {}

}
