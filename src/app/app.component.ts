import { Component } from '@angular/core';
import { CaptionItem } from './caption-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',///ระบุที่ไฟล์มี url
  //template:`<div>aaaaaa</div>,
  styleUrls: ['./app.component.css']
})

// export class AppComponent {
//   title = 'hello-angular';
// }

export class AppComponent {
  title: string | undefined; //state variable
  imgSrc = "./assets/Angular.png"

  //Type infernce
  // public messages = [ //  : string[] สามารถละ type ได้ มันจะดูข้อมูลจากใน array
  //   'everyday is a fresh start',
  //   'life is too short to waste it',
  //   'good day in my mind',
  // ];

  // usedMessages: string[] = []; //การประกาศตัวแปร ต้องระบุ type

  captionList: CaptionItem[] = [
    {
      id: 1,
      message: 'good day in my mind',
      icon: './assets/ic_funny_01.png'
    },
    {
      id: 2,
      message: 'life is too short to waste it',
      icon: './assets/ic_funny_02.png'
    },
    {
      id: 3,
      message: 'everyday is a fresh start',
      icon: './assets/ic_funny_03.png'
    },
  ];

  public usedCaptionList: CaptionItem[] = [];

  constructor() { // คือหน้าเเรกของเว็ปที่เราตั้งค่าไว้ ในที่นี้คือ appcomponent
    this.title = this.randomCaption()?.message;


    // const randomIndex = this.getRandomInt(this.messages.length)
    // this.title = this.messages[randomIndex];
  }

  randomCaption() {

    // let randomIndex = this.getRandomInt(this.messages.length)
    // let newCaption = this.messages[randomIndex];
    // while (newCaption == this.title) {
    //   randomIndex = this.getRandomInt(this.messages.length)
    //   newCaption = this.messages[randomIndex];
    // }
    let randomIndex: number; //ต้องมีการระบุ type 
    let newCaption: CaptionItem;

    if (this.captionList.length == this.usedCaptionList.length) {
      return null;
    }

    do {
      randomIndex = this.getRandomInt(this.captionList.length)
      newCaption = this.captionList[randomIndex];
    } while (this.usedCaptionList.includes(newCaption)); //includes เช็คว่าค่านั้นเป็น true or false

    this.usedCaptionList.push(newCaption);
    return newCaption;
  }

  handleClickButton() {
    this.title = this.randomCaption()?.message;
  }

  handleClickResetButton() {
    this.title = undefined;
    this.usedCaptionList = [];
    this.randomCaption();
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}


//NgIf ใช้สำหรับกำหนดเงื่อนไขในการเพิ่ม หรือลบ element ออกจาก DOM. NgFor ใช้สำหรับวนลูปทำซ้ำเพื่อแสดงรายการใน template
