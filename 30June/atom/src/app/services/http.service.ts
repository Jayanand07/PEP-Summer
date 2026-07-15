import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'https://api.themoviedb.org/3/';

  private http = inject(HttpClient);
  private header = new HttpHeaders({
    accept: 'application/json',
    Authorization:
      'Bearer YOUR_TMDB_READ_TOKEN',
  });

  get<T>(endpoint: string, params?: Record<string, string>): Observable<T> {
    const httpParams = new HttpParams({ fromObject: params || {} });

    return this.http.get<T>(`${this.baseUrl}${endpoint}`, {
      headers: this.header,
      params: httpParams,
    });
  }
}
