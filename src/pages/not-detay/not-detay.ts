import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../models/notes';
import { NotesProvider } from '../../providers/notes/notes'
import { NotEklePage } from '../not-ekle/not-ekle';
/**
 * Generated class for the NotDetayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-not-detay',
  templateUrl: 'not-detay.html',
})
export class NotDetayPage {
  note: Note;
  login: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private NotProv: NotesProvider) {
    this.login = navParams.get('login');
    this.NotProv.loadDetails(this.login).subscribe(note => {
      this.note = note;
      console.log(note)
    });

  }
  delDatas(){
    this.NotProv.delDatas(this.login).subscribe(()=>{
      resp => console.log('deleted');
      error => console.log('error occur, delete fail');
    });  
  }
  updateData(){
      this.navCtrl.push(NotEklePage, this.login);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad NotDetayPage');
  }
}
