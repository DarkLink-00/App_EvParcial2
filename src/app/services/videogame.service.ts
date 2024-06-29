import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  //Propiedades
  baseUri: string = 'https://localhost:40000/api';
  headers = new HttpHeaders()
    .set('Content-Type','application/json');

  constructor(private http:HttpClient) { }

  //Metodo para agregar un registro
  agregarVideogame(data):Observable<any> {
    let url = `${this.baseUri}/agregar`;
    return this.http.post(url,data)
    .pipe(catchError(this.errorManager));
  }

  //Metodo para obtener el catálogo completo
  getVideogames(){
    let url = `${this.baseUri}/videojuegos`;
    return this.http.get(url);
  }

  //Método para obtener un videojuego por ID
  getVidegame(id):Observable<any> {
    let url = `${this.baseUri}/videojuego/${id}`;
    return this.http.get(url,
      {headers: this.headers}
    )
    .pipe(map((res:Response) => {
      return res || {};
    }),
    catchError(this.errorManager)
    );
  }

  //Método para actualizar un registro
  updateVideogame(id,data):Observable<any> {
    let url = `${this.baseUri}/actualizar/${id}`;
    return this.http.put(url,data,{
      headers: this.headers
    }).pipe(catchError(this.errorManager));
  }

  //Método para eliminar un registro
  deleteVideogame(id):Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url,{
      headers: this.headers
    }).pipe(catchError(this.errorManager));
  }

  //Manejador de errores
  errorManager(error:HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      //obtenemos el error del lado del cliente
      errorMessage = error.error.message;
    } else {
      //obtenemos el error del lado del server
      errorMessage = `Error: ${error.status}
      Mensaje: ${error.message}`;
    }  
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}