import { Component, EventEmitter, Output } from '@angular/core';
import { filter } from 'rxjs';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private searching: NoteService) { }
  searchText: string = "";
  note: Note[] = [];

  @Output()
  searchTextChanged: EventEmitter<Array<Note>> = new EventEmitter<Array<Note>>();
  searchNote() {
    this.searching.getNotes().subscribe({
      next: (data) => {
        this.note = data.filter(check => check.title == this.searchText)
        if (this.note.length != 0) {
          this.searchTextChanged.emit(this.note);
        }
        else {
          alert(`Invalid Input!`);
          this.searchTextChanged.emit(data)
        }
      }
    })
  }
  search() {
    if (this.searchText == "") {
      this.searching.getNotes().subscribe({ next: data => (this.searchTextChanged.emit(data)) })
    }
  }
}
