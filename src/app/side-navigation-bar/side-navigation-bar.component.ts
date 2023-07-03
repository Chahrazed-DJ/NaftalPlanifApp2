import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Planificateurs } from '../models/planificateurs';
@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.css']
})

export class SideNavigationBarComponent implements OnInit{
  menuBtnChange(){
    const sidebar = document.querySelector(".sidebar")!;
    const closeBtn = document.querySelector("#btn")!; 
    sidebar.classList.toggle("open");
    
   if(sidebar.classList.contains("open"))
   {
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
   }else
    {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
   }
  };
  
  planificateur!:Planificateurs;
  user:any;
  constructor(private router: Router,public rs:RestService,private route: ActivatedRoute) { }
  async ngOnInit() {
    this.user=this.rs.getUser();
    this.planificateur = await this.rs.getFireData(this.user.uid);

  }
  onChangePage(page:string ){
    
    this.router.navigate([page]);

  }

  activeLinkIndices: boolean[] = [true, false, false,false, false, false,false];

  onLinkClick(index: number) {
    this.activeLinkIndices.fill(false);
    this.activeLinkIndices[index] = !this.activeLinkIndices[index];
  }
  logout(){
    this.rs.deconnecter();
  }
}

