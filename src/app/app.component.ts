import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';



const config = {
  apiKey: 'AIzaSyAGjTjPYzoGmS1_vwR27tbs6aV-Bcq4Z3s',
  databaseURL: 'https://angular-chat-f1fcc-default-rtdb.firebaseio.com'
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-app';

  costructor(){
    firebase.initializeApp(config)
  }
}
