import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { CanActivate } from '@angular/router';


@Injectable()
export class IsLoggedGuard implements CanActivate, CanLoad {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = localStorage.getItem('user');
    if (user && user !== '') {
      return true;
    } else {
      this.router.navigate(['/films']);
      return false;
    }
  }

  canLoad(route: import("@angular/router").Route, segments: import("@angular/router").UrlSegment[]): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    return true;
  }
}
