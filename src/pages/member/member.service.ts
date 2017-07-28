import { Injectable } from "@angular/core";

@Injectable()
export class MemberService{
    isLogined:boolean = false;
    users: Array < any > = [
      {"index":1,
      "name":"张三",
      "sex":"Male",
      "skill":"Java",
      "age":"10",
      "expect":"女",
      "homepage":"zhangsan"},
     {"index":2,
      "name":"李雷",
      "sex":"Female",
      "skill":"C++",
      "age":"12",
      "expect":"会Java",
      "homepage":"lilei"},
     {"index":3,
      "name":"李花",
      "sex":"Female",
      "skill":"C",
      "age":"8",
      "expect":"女",
      "homepage":"lihua"}
  ];

    constructor(){

    }

    getUsers(){
        return this.users;
    }

}

