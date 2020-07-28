import { Component } from '@angular/core';
import { HelloComponent} from './hello/hello.component';


interface myData{
  obj: Object
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  
  
  constructor(){
    
  }
  ngOnInit(){

  }
 
  
  // updateValue(e){
  //   this.text = e.target.value
  //   console.log(e.target.value)
  // }




  // myDisabledValue = false
  // constructor(){
  //   this.myVariable = ""
  //   this.myDisabledValue = false
  //   setInterval(() => {
  //     this.myVariable = Math.random().toString()
  //     this.myDisabledValue = Math.random() > 0.5
  //   },500)
  // }
  // callmyFunc(){
  //   console.log("Function called!")
  // }
}
