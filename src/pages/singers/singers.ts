import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
 
@IonicPage()
@Component({
  selector: 'page-singers',
  templateUrl: 'singers.html',
})
export class SingersPage {
  name = "";
  artists = [];
  offset = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.name = this.navParams.data.name;
    this.getData(this.offset);
  }

  // 上拉加载
  doInfinite($event) {
    this.getData(this.offset);
  }

  //获取数据
  getData(offset) {
    var id = this.navParams.data.id;
    var url = `http://localhost:3000/artist/list?cat=${id}`;
    //请求歌手
    this.http.get(url).subscribe((result:any)=>{
      // 1.Array.prototype.push.apply(this.artists, this.artists)
      // 2.this.artists.push(...result.artists)
      // 数组连接三种方式
      this.artists = this.artists.concat(result.artists);
      this.offset++;
    });
  }
}
