import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})

export class SampleComponent implements OnInit {
  constructor(private router: Router) {

  }
  home: boolean = true

  profilactive: boolean = false
  Dashboard: boolean = false
  Goals: boolean = false
  Assessment: boolean = false
  manager: boolean = false
  Resign: boolean = false

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
  homes() {
    this.home = true;
    this.manager = true;
    this.Assessment = false;
    this.Goals = false;
    this.profilactive = false;
    this.manager = false;
    this.Dashboard = false;
  }
  profil() {

    this.profilactive = true;
    this.home = false
    this.Dashboard = false;
    this.manager = false;
    // this.profilactive=false;
  }
  Dash() {
    this.Dashboard = true;
    this.profilactive = false;
    this.home = false
    this.Goals = false;
    this.manager = false;


  }
  goals() {
    this.Goals = true;
    this.profilactive = false;
    this.home = false;
    this.Dashboard = false;
    this.Assessment = false;
    this.manager = false;
  }
  self() {
    this.Assessment = true;
    this.Goals = false;
    this.profilactive = false;
    this.home = false;
    this.Dashboard = false;
    this.manager = false;
  }
  Performance() {
    this.manager = true;
    this.Assessment = false;
    this.Goals = false;
    this.profilactive = false;
    this.home = false;
    this.Dashboard = false;
  }
  Resignation() {
    this.Resign = true;
    this.manager = false;
    this.Assessment = false;
    this.Goals = false;
    this.profilactive = false;
    this.home = false;
    this.Dashboard = false;

  }
  logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: " #013579",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/signup')
      }
    });
  }

}
