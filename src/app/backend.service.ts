import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  rutaRaiz = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }
  /**
   * 
   * @param controlador : este parámetro nos indica el punto de acceso al
   *  servicio del backend
   * @returns Observable<any>
   */
  getRequest(controlador: String): Observable<any> {
    return this.http.get(this.rutaRaiz + controlador);
  }


  deleteRequest(controlador: String, id: String): Observable<any> {
    const url = this.rutaRaiz + controlador + '/' + id;
    return this.http.delete(
      url,
       {
      headers: { 'content-type': 'application/json' }
    });
  }

  patchRequest(controlador: String, id: String, datos: String): Observable<any> {
    const url = this.rutaRaiz + controlador + '/' + id;
    return this.http.patch(
      url,
      datos, {
      headers: { 'content-type': 'application/json' }
    });
  }

  postRequest(controlador: String, datos: String): Observable<any> {
    const url = this.rutaRaiz + controlador;
    return this.http.post(
      url,
      datos, {
      headers: { 'content-type': 'application/json' }
    });
  }

  autenticar(credenciales: String): Observable<any> {

    const filter = '{"where": ' + credenciales + '}';
    const filterEncode = encodeURIComponent(filter);
    return this.http.get(this.rutaRaiz + 'usuarios?filter=' + filterEncode);
  }

  /**
   * post
   * patch
   * put
   * delete
   */
}
