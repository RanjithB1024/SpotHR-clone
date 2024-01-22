import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isSideNavOpened = false;
  toggleSideBar() {
    ;
   
   
 }

  isprofileactive:boolean=false
  profilactive:boolean=false
  selfactive:boolean=false
 Dash(){
  //  if(!this.isprofileactive){
  //    this.profilactive=false;
  //    this.isprofileactive=true;
  //  }else{
  //    this.isprofileactive=false;
  //    this.profilactive=true;
  //  }
  this.isprofileactive=true;
  this.profilactive=false;
 }
 profil(){
  //  if(!this.profilactive){
  //    this.profilactive=true;
  //    this.isprofileactive=false;
  //  }else{
  //    this.profilactive=false;
  //    this.isprofileactive=true;
  //  }
     this.profilactive=true;
     this.isprofileactive=false;
 }
 self(){
  this.selfactive=true;
  this.isprofileactive=false
  this.profilactive=false
 }
  ngOnInit(): void {
    const mobileScreen = window.matchMedia("(max-width: 990px )");
    $(document).ready(function () {
        $(".dashboard-nav-dropdown-toggle").click(function () {
            $(this).closest(".dashboard-nav-dropdown")
                .toggleClass("show")
                .find(".dashboard-nav-dropdown")
                .removeClass("show");
            $(this).parent()
                .siblings()
                .removeClass("show");
        });
        $(".menu-toggle").click(function () {
            if (mobileScreen.matches) {
                $(".dashboard-nav").toggleClass("mobile-show");
            } else {
                $(".dashboard").toggleClass("dashboard-compact");
            }
        });
    });
 
}
logout(){
  Swal.fire({  
    icon: 'warning',  
    text: 'Are you sure you want to logout',

    showCancelButton: true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33' ,
   confirmButtonText: 'Yes',  
   cancelButtonText:'No',
  })
}
show:boolean=false;
opentongle(){
  console.log("this is the correspodnig show",this.show);
  
if(this.show=false){
this.show=true
}else{
this.show=false
}
}
actvaited:boolean=false
activatedmethod(){
  if(this.actvaited==false){
    this.actvaited=true
  }else{
    this.actvaited=false
  }
}
}
