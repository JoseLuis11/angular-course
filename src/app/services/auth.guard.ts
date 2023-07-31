import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular'
import { tap } from 'rxjs'

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const auth = inject(AuthService)
  return auth.isAuthenticated$.pipe(
    tap((value) => {
        return !value ? router.navigate(['home']) : true
    })
  )
};
