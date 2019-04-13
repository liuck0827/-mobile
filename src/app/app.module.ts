import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule} from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { MusicPage } from '../pages/music/music';
import { FoundPage } from '../pages/found/found';
import { ArtistPage } from '../pages/artist/artist';
import { RankPage } from '../pages/rank/rank';
import { ClassifyPage } from '../pages/classify/classify';
import { RadioPage } from '../pages/radio/radio';
import { MoviePage } from '../pages/movie/movie';
import { SingersPage } from '../pages/singers/singers';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    MusicPage,
    FoundPage,
    ArtistPage,
    RankPage,
    ClassifyPage,
    RadioPage,
    MoviePage,
    SingersPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    MusicPage,
    FoundPage,
    ArtistPage,
    RankPage,
    ClassifyPage,
    RadioPage,
    MoviePage,
    SingersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
