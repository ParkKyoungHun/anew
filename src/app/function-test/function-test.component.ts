import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-test',
  template: require('./function-test.component.html')
})
export class FunctionTestComponent implements OnInit {
  private title:string = "함수 테스트"
  constructor() { }

  ngOnInit() {
  }

  
  testNormalFunction(){
    test();
    function test():void{
      alert(1);
    }
  }

  testLetFunction(){
    let test;
    try{
      test();
      test = function(){
        alert(2);
      }
    }catch(e){
      alert(e);
    }
    test();
  }
}
