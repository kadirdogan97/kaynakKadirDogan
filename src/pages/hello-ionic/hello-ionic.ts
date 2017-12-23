import { Component } from '@angular/core';
import { NotEklePage } from '../not-ekle/not-ekle';
import { NavController } from 'ionic-angular';
import { NotDetayPage } from '../not-detay/not-detay';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Note } from '../../models/notes';
import { NotesProvider } from '../../providers/notes/notes'

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers: [NotesProvider]
})
export class HelloIonicPage {
  notes: Note[]
  constructor(public navCtrl: NavController, public navParams: NavParams, private NotProv: NotesProvider) {
    this.NotProv.load().subscribe(not => {
      this.notes = not;
      console.log(not);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BASLANGIC');
  }
  goToDetails(login: string) {
    this.navCtrl.push(NotDetayPage, {login});
  }
  goToEkle() {
    this.navCtrl.push(NotEklePage);
  }
}
