import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-function',
  template: require('./arrow-function.component.html')
})
export class ArrowFunctionComponent implements OnInit {
  private title:string = "화살표 함수 테스트"
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
      console.log(e);
    }
    test();
  }
}
