import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() inputChange: EventEmitter<string> = new EventEmitter();

  onKeyPressEvent(event: any) {
    this.inputChange.emit(event.target.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
