import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated().then((authenticated: Boolean | any) => {
            if (authenticated) {
                return true;
            } else {
                this.authService.redirectUrl = state.url;
                this.router.navigate(['/login']);
                return false;
            }
        }).catch();
    }

}