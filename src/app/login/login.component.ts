import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, 
              private router: Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    this.Auth.getUserDetails(username,password).subscribe(record => {
      if(record.success) {
        this.router.navigate(['dashboard'])  //redirect the person to admin
        this.Auth.setLoggedIn(true)
      } else {
        window.alert(record.message)
        // this.router.navigate(['admin'])  //redirect the person to admin
        // this.Auth.setLoggedIn(false)
      }
    })
    console.log(username, password)
  }

}
