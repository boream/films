import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Login } from '../../models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  faEye = faEye;
  faEyeSlash = faEyeSlash;
  public passwordType = 'password';

  public model = new Login("","")


  constructor( private router: Router ) { }

  ngOnInit() {
  }

 seePassword(){
   if(this.passwordType==='password'){
    this.passwordType = 'text';
    this.faEye = faEyeSlash;
   }else{
    this.passwordType = 'password';
    this.faEye = faEye;
   }
 }

 onSubmit(loginForm){
  if(loginForm.valid){
    localStorage.setItem('user', 'soemthing');
    this.router.navigate(['/films'])
  }
 }
}
