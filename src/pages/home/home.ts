import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { MainPage } from '../main/main';
import { MusicPage } from '../music/music';
import { FoundPage } from '../found/found';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // 显示隐藏header
  isHiden = false;
  // 导航模块
  target = [MainPage,MusicPage,FoundPage];
  tabs = ['我的','音乐馆','发现'];
  isActive = [false,true,false];
  index = 1;
  constructor(public navCtrl: NavController,
    public ev: Events) {
      this.ev.subscribe('hide',(flag)=>{
        this.isHiden = flag;
        console.log(flag);
      });  
  }

  // 切换tabs选项
  chooseTab(i) {
    //修改显示内容
    this.index = i;
    for (let index = 0; index < this.tabs.length; index++) {
      //1.修改默认选项
      if(index==i){
        this.isActive[index] = true;
      }else{
        this.isActive[index] = false;
      }
    }
  }

}
