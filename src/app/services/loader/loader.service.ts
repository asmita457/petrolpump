import { Subject } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loadingStatus = new Subject<boolean>();
  loaderTop = new Subject<boolean>();
  blockingLoader = new Subject<boolean>();
  blockingLoaderAuth = new Subject<boolean>();
  bgGrey = new Subject<boolean>();

  blockingLoaderFlag = false;
  loaderTopFlag = false;
  private subject = new Subject<any>();


  showBlockingLoader(){
    console.log("load");
    this.blockingLoader.next(true);
    this.blockingLoaderFlag = true;
  }

  hideBlockingLoader(){
    this.blockingLoader.next(false);
    this.blockingLoaderFlag = false;
  }

  showBlockingLoaderAuth(){
    this.blockingLoaderAuth.next(true);
  }

  hideBlockingLoaderAuth(){
    this.blockingLoaderAuth.next(false);
  }

  sendMessage(message) {
    // console.log("name",message);
    let set_data = {};
    set_data['message'] = message;
    this.subject.next(set_data);
}
getMessage(): Observable<any> {
  return this.subject.asObservable();
}

  constructor() { }
}
