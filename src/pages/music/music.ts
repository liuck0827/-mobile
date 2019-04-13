import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ArtistPage } from '../artist/artist';
import { RankPage } from '../rank/rank';
import { ClassifyPage } from '../classify/classify';
import { RadioPage } from '../radio/radio';
import { MoviePage } from '../movie/movie';

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {
  //轮播图
  banner = [];
  //导航栏
  tabs = ['歌手列表','排行','分类歌单','电台','视频'];
  icons = ['geshou','paihang','fenlei','ziyuan','shipin'];
  target = [ArtistPage,RankPage,ClassifyPage,RadioPage,MoviePage];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http: HttpClient) {
    
  }

  ionViewDidLoad() {
    var url = 'http://localhost:3000/banner';
    this.http.get(url).subscribe((result: any)=>{
      this.banner = result.banners;
    });
  }

  toPage(index) {
    this.navCtrl.parent.push(this.target[index],{
      name: this.tabs[index]
    });
  }
}
