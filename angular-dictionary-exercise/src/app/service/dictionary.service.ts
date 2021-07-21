import {Injectable} from '@angular/core';
import {Word} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Word[] = [{
    id: '1',
    name: 'hi',
    definition: 'xin chào'
  },
    {
      id: '2',
      name: 'table',
      definition: 'cái bàn'
    }];

  constructor() {
  }

  getAll() {
    return this.dictionary;
  }

  findById(id: string) {
    return this.dictionary.find(item => item.id === id);
  }
}
