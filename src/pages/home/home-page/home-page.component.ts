import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:Array<any> = [
    {"index":1,
    "name":"张三",
      "sex":"Male",
      "name_en":"Tom",
      "skill":"Java",
      "working_year":"10",
      "education":"本科",
      "homepage":"zhangsan"},
     {"index":2,
     "name":"李雷",
      "sex":"Female",
      "name_en":"Lily",
      "skill":"C++",
      "working_year":"12",
      "education":"本科",
      "homepage":"lilei"},
      {"index":3,
     "name":"李花",
      "sex":"Female",
      "name_en":"Monica",
      "skill":"C",
      "working_year":"8",
      "education":"本科",
      "homepage":"lihua"}
  ]
deleteLast(){
  this.users.pop()
}
saveNewUser(){
  this.users.push({
      "index":11,
      "name":"李花",
      "sex":"Female",
      "name_en":"Monica",
      "skill":"C",
      "working_year":"8",
      "education":"本科",
      "homepage":"lihua"
  })
}
  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
  this.users.sort(function (a, b) {
  if (a.index > b.index) {
    return 1;
  }
  if (a.index < b.index) {
    return -1;
  }
  // a 必须等于 b
  return 0;
  });
  }

  sortByDesccending(){
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.users.sort(function (a, b) {
      if (a.index > b.index) {
        return -1;
      }
      if (a.index < b.index) {
        return 1;
      }
      // a 必须等于 b
      return 0;
      });
  }

  sortByRadom(){
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    function shuffle(a) {
      for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
    }
    shuffle(this.users);
    }

  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
