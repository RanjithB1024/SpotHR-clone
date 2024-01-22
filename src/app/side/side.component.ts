import { Component } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent {

  navItems: any = [];
  isSideNavOpened = false;
 
  





  // constructor() {}

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

  
  
  
  

  toggleSideBar() {
     this.isSideNavOpened = !this.isSideNavOpened;
    
    
   
   

   
    
    
    
   
  }
  
  
  
  
   

  getNavItems() {
   
  }

  setActivePAge(page: any) {
    
  }
  
}

