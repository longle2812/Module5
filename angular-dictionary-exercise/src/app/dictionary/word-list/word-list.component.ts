import {Component, OnInit} from '@angular/core';
import {Word} from '../../model/word';
import {DictionaryService} from '../../service/dictionary.service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  dictionary: Word[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
    this.dictionary = this.dictionaryService.getAll();
  }

}
