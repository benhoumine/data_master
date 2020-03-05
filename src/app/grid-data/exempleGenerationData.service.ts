import { Injectable } from '@angular/core';

@Injectable()
export class exempleGenerationData {

  static DATA_SIZE = 10;

  myData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.getData());
      }, 2000);
    });
  }

  getNewExampleObj(n?: number): any {
    n = ((typeof n !== 'undefined') ? n : Math.random() * 1000);
    return {
      id: n,
      nom : ` user ${n}`,
      email: `user_${n}@soprasteria.com`,
    };
  }
  protected getData(): Array<any> {
    const data = [];
    for (let i = 0; i < exempleGenerationData.DATA_SIZE; i++) {
      data.push(this.getNewExampleObj(i));
      console.log(this.getNewExampleObj(i));
    }
    return data;
  }
}