import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(event){
    event.preventDefault()
    const errors = []
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    const cpassword = target.querySelector('#cpassword').value

    if(password != cpassword) {
      errors.push("Password do not match")
    }

    //more validation

    if(errors.length === 0) {
      this.auth.registerUser(username, password).subscribe(record =>{
        console.log(record)
        if(record.success) {
          this.router.navigate(['login'])
        }
      })
    }
    console.log(username, password)
  }

}
