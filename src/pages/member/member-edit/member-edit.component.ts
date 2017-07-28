import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { MemberService } from '../member.service'

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit,OnDestroy {
  memberId:string="";
  member:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getUserSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private memberServ:MemberService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.memberServ.users.push(this.member)
    this.location.back();
  }
  ngOnInit() {
    this.getUserSubscribe = this.route.params.subscribe(params=>{
      this.getMember(params['sid']).then(member=>{
      console.log(member)
      this.memberId = member.index;
      this.member = member
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getUserSubscribe.unsubscribe();
  }

  getMember(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let member = {name:""}
        this.isNew = true;
        resolve(member)
      }
      let member = this.memberServ.users.find(item=>item.index == id)
      if(member){
        resolve(member)
      }else{
        reject("member not found")
      }
    })
    return p
}

}
