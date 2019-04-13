import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';



import { HomePage } from '../home/home';
import { SingersPage } from '../singers/singers';
@IonicPage()
@Component({
  selector: 'page-artist',
  templateUrl: 'artist.html',
})
export class ArtistPage {
  home = HomePage;
  singers = SingersPage;
  name = "";
  //歌手列表分类
  artists = [
    {name:'华语',content:[{id:'1001',name:'华语男歌手'},{id:'1002',name:'华语女歌手'},{id:'1003',name:'华语组合/乐队'}]},
    {name:'欧美',content:[{id:'2001',name:'欧美男歌手'},{id:'2002',name:'欧美女歌手'},{id:'2003',name:'欧美组合/乐队'}]},
    {name:'日本',content:[{id:'6001',name:'日本男歌手'},{id:'6002',name:'日本女歌手'},{id:'6003',name:'日本组合/乐队'}]},
    {name:'韩国',content:[{id:'7001',name:'韩国男歌手'},{id:'7002',name:'韩国女歌手'},{id:'7003',name:'韩国组合/乐队'}]},
    {name:'其他',content:[{id:'4001',name:'其他男歌手'},{id:'4002',name:'其他女歌手'},{id:'4003',name:'其他组合/乐队'}]}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {   
  }

  ionViewDidLoad() {
    this.name = this.navParams.data.name;
  }
}
