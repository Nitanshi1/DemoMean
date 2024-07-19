import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token=localStorage.getItem('authorization');
  if(token){
    return true;
  }
  return false;
};
