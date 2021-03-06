
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  quote = "Loading your personal quote"
  email = "Getting your email..."
  
  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    this.user.getData().subscribe(record => {
      if(record.status){
      this.quote = record.quote
      this.email = record.email
      } else {
        this.router.navigate(['logout'])
      }

    })
  }

  updateQuote(event){
    const value = event.target.parentNode.querySelector('#myQuote').value
    this.user.updateQuote(value).subscribe(record => {
      if(record.success) {
        alert("Your quote was updated")
      } else {
        alert("Some problem")
      }
    })
  }

}

