import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToolBoxService {
  constructor() {}
  validateCityName(cityName: string): string {
    // Valid Form eg Ha Noi
    const temp = cityName.trim().split(' ');
    // console.log(temp);
    temp.forEach((word, i) => {
      if (word !== '') {
        temp[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    });
    // console.log(temp.join(' '));
    // console.log(`Tên thành phố sau khi sửa : ${cityName}`);
    return temp.join(' ');
  }
}
