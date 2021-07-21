import { Component, OnInit } from '@angular/core';
import {Word} from '../../model/word';
import {DictionaryService} from '../../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {
  word: Word;
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        const id = paramMap.get('id');
        this.word = this.dictionaryService.findById(id);
      }
    )
  }

}
