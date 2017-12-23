import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Note } from '../../models/notes';
import 'rxjs/add/operator/map';
/*
  Generated class for the NotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotesProvider {

  constructor(public http: Http) {
    console.log('Hello NotesProvider Provider');
  }


  load() : Observable<Note[]>{
    return this.http.get('assets/data/datas.json').map(res => <Note[]>res.json());
  }

  loadDetails(login: string): Observable<Note> {
    return this.http.get(`assets/data/${login}.json`).map(res => <Note>(res.json()));
  }

  delDatas(login:string){
    this.http.delete(`assets/data/${login}.json`).map(res => <Note>(res.json()));
  }

  addDatas(notSahip, notDers, notKonu, notIcerik, notKaynak, notTarih) {

    let postParams = { notSahip:notSahip, notDers:notDers, notKonu:notKonu, notIcerik:notIcerik, notKaynak:notKaynak, notTarih:notTarih }

    return this.http.post('assets/data/datas.json', JSON.stringify(postParams))
      .map(res => {
        <Note>(res.json());
        console.log('testEkle');
      });
  }

}
