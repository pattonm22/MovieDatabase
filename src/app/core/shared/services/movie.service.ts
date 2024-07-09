import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = {
params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjkwNjNlNWRkMTI1NmU3NTY0MzViY2I3MmY2MzVjNSIsIm5iZiI6MTcyMDQ2Mzg5NC4yODExNTEsInN1YiI6IjY2OGMyZTg3OTIzYjA4Mzk3YTYyYzIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WYooHsN1M5yRrOVd-bPjV0E5agE826dpwMLQg239h00'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

http = inject(HttpClient);

    getMovies() {
        return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options)
    }

    getTvShows() {
      return this.http.get('https://api.themoviedb.org/3/discover/tv', options)
    }

    getRatedMovies() {
      return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options)
    }

    getBannerImage(id: number) {
      return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
    }

    getBannerVideo(id: number) {
      return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
    }

    getBannerDetail(id: number) {
      return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
    }

    getNowPlayingMovies() {
      return this.http.get('https://api.themoviedb.org/3/movie/now_playing', options)
    }

    getPopularMovies() {
      return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
    }

    getTopRated() {
      return this.http.get('https://api.themoviedb.org/3/movie/top_rated', options)
    }

    getUpcomingMovies() {
      return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
    }


}
