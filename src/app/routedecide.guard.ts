// routedecide.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TestingService } from './testing.service';

@Injectable({
  providedIn: 'root'
})
export class RoutedecideGuard implements CanActivate {

  constructor(private router: Router, private testingService: TestingService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.testingService.routdecide) {
      return true;
    } else {
    
      return false;
    }
  }
}
