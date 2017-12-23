import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesProvider } from '../../providers/notes/notes';
import { Note } from '../../models/notes';
import { NotDetayPage } from '../not-detay/not-detay';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the NotEklePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-not-ekle',
  templateUrl: 'not-ekle.html',
})
export class NotEklePage {
  note: Note;
  login: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private NotProv: NotesProvider, public alertCl: AlertController) {
    //Bu bölümü update için yapmaya çalıştım. update den gelen verileri aldıktan sonra silecek verileri ve yeni bir şey ekleme işlemine geçrmiş gibi olacak.
    this.login = navParams.get('login');
    this.NotProv.loadDetails(this.login).subscribe(note => {
      this.note = note;
      console.log(note)
    });
    this.NotProv.delDatas(this.login).subscribe(
      resp => console.log('deleted'),
      error => console.log('error occur, delete fail'));
  }
  
  ekleUyari() {
    let alert = this.alertCl.create({
      title: 'Not Eklendi!',
      buttons: ['Tamam']
    });
    alert.present();
  }  
  ekleFonk(notSahip,notDers,notKonu,notIcerik,notKaynak,notTarih) {

    this.NotProv.addDatas(notSahip,notDers,notKonu,notIcerik,notKaynak,notTarih);

    console.log(notSahip,notDers,notKonu,notIcerik,notKaynak,notTarih, "NOT EKLENDİ!");
    
    this.ekleUyari();
    this.navCtrl.pop(null, null);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad NotEklePage');
  }

}
