import { Injectable} from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})
export class AuthInterceptorService implements HttpInterceptor{

    constructor(public router:Router){}

    intercept(req: HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>> {

      console.log(localStorage.getItem('token'));
        const token = localStorage.getItem('token');

        let request = req;
    
        if (token) {
          request = req.clone({
            setHeaders: {
              authorization: `Token ${ token }`
            }
          });
        }
    
        return next.handle(request).pipe(
          catchError((err: HttpErrorResponse) => {
    
            if (err.status === 401) {
                
                localStorage.setItem("token","");
                this.router.navigate(["/login"])
            }
    
            return throwError( err );
    
          })
        );
    }
}