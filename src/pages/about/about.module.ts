import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { MemberService } from '../member/member.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AboutPageComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [AboutPageComponent],
  providers:[MemberService]
})
export class AboutModule { }
