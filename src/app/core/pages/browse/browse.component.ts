import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/core/shared/services/auth.service';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { MovieService } from '../../shared/services/movie.service';
import { MovieCarouselComponent } from '../../shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from '../../shared/models/videoContent';
import { Observable, forkJoin, map, switchMap } from 'rxjs';


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
  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((res: any) => {
      console.log(res);
      this.movies = res.results;
    })

    this.movieService.getTvShows().subscribe((res: any) => {
      console.log(res);
      this.tvShows = res.results;
    })

    this.movieService.getRatedMovies().subscribe((res: any) => {
      console.log(res);
      this.ratedMovies = res.results;
    })

    this.movieService.getNowPlayingMovies().subscribe((res: any) => {
      console.log(res);
      this.nowPlayingMovies = res.results;
    })

    this.movieService.getUpcomingMovies().subscribe((res: any) => {
      console.log(res);
      this.upcomingMovies = res.results;
    })

    this.movieService.getPopularMovies().subscribe((res: any) => {
      console.log(res);
      this.popularMovies = res.results;
    })

    this.movieService.getTopRated().subscribe((res: any) => {
      console.log(res);
      this.topRatedMovies = res.results;
    })

  }

    signOut() {
      sessionStorage.removeItem("loggedInUser");
      this.auth.signOut();
    }
}
