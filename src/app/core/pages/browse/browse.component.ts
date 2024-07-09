import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/core/shared/services/auth.service';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {

  auth = inject(AuthService);
  //movieService = inject(MovieService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;

signOut(){
  sessionStorage.removeItem("loggedInUser");
  this.auth.signOut();
}

}
