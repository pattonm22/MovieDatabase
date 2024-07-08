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
        return this.http.get<any>('https://api.themoviedb.org/3/discover', options)
    }


}
