import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { DatePipe } from '@angular/common';

export const getCurrentUsers = (snapshot: any) => {
  const currentUsers:any = [];

  snapshot.forEach((childSnapshot: any) => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    currentUsers.push(item);
  })
  return currentUsers
}
@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
})
export class RoomlistComponent implements OnInit {

  public nickname: string = '';
  public displayedColumns: string[] = ['roomname'];
  public rooms = [];
  isLoadingResults = true;
  constructor(private route: ActivatedRoute, private router: Router, public datepipe: DatePipe) {
    this.nickname = localStorage.getItem('nickname') || '';
    firebase.database().ref('rooms/').on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
      this.isLoadingResults = false;
    })

  }

  ngOnInit(): void {
  }

}
function snapshotToArray(resp: firebase.database.DataSnapshot): never[] {
  throw new Error('Function not implemented.');
}

