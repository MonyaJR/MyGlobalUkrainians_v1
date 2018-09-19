import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {auth} from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  userFirstName: string;
  userLastName: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // Check auth state
    this.authService.checkAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
        console.log(auth);
      }
    });
  }

  onSubmit() {
    this.authService.register(this.email, this.password)
      .then(user => {
        return this.router.navigate(['/']);
      })
      .catch(err => {
        console.log(err);
      });
  }

}
