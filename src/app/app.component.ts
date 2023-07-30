import { Component } from '@angular/core';
import { CaptionItem } from './caption-item';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string | undefined; // state variable
  imgSrc = "./assets/angular_logo.png";

  // type inference
  // messages = [
  //   'อากาศร้อนก็ทนเอา ขนาดเขาไม่รัก ยังทนได้เลย',
  //   'ไม่ชอบคนอ่อนไหว ชอบแต่คนโอนไวเท่านั้น',
  //   'เพราะว่าไม่ใช่ยาสระผม เลยไม่มีสิทธิ์เข้าตาเธอ',
  // ];
  //usedMessages: string[] = [];

  captionList: CaptionItem[] = [
    {
      id: 1,
      message: 'อากาศร้อนก็ทนเอา ขนาดเขาไม่รัก ยังทนได้เลย',
      icon: './assets/ic_funny_01.png'
    },
    {
      id: 2,
      message: 'ไม่ชอบคนอ่อนไหว ชอบแต่คนโอนไวเท่านั้น',
      icon: './assets/ic_funny_02.png'
    },
    {
      id: 3,
      message: 'เพราะว่าไม่ใช่ยาสระผม เลยไม่มีสิทธิ์เข้าตาเธอ',
      icon: './assets/ic_funny_03.png'
    },
  ];

  usedCaptionList: CaptionItem[] = [];

  constructor() {
    this.title = this.randomCaption()?.message;
  }

  randomCaption() {
    let randomIndex: number;
    let newCaption: CaptionItem;

    if (this.captionList.length == this.usedCaptionList.length) {
      return null;
    }

    do {
      randomIndex = this.getRandomInt(this.captionList.length);
      newCaption = this.captionList[randomIndex];
    } while (this.usedCaptionList.includes(newCaption));

    this.usedCaptionList.push(newCaption);
    return newCaption;
  }

  handleClickButton() {
    this.title = this.randomCaption()?.message;
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
