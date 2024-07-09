import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/core/shared/services/auth.service';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../../shared/models/videoContent';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  auth = inject(AuthService);
  movieService = inject(MovieService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;

  popularMovies: IVideoContent[] = [];
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res=>{
      console.log(res);
      this.popularMovies = res.results;
    })
  }

    signOut() {
      sessionStorage.removeItem("loggedInUser");
      this.auth.signOut();
    }
}
