// 0. a 클릭시 새로고침되는 이벤트 제거

// on 그룹 이벤트 메소드 붙임 -> a의 속성값 href="#" click 했을 때 -> function(e) 함수 실행 (매개변수 e로 줌) -> e에 기본값 preventDefault 스크립트 호출
// e 는 a의 속성값 #인 대상 -> 클릭했을 때 -> 이벤트 초기화
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});

// 1. approach 영역

// $:이벤트 불러오는 메소드 window 메소드 불러옴 에 on(이벤트)! 
// scroll 사이즈 resize 할 때 다음의 함수 실행
$(window).on('scroll resize', function(){
  let scrollPos = 0; // 초기값 0
  scrollPos = $(document).scrollTop(); // html document의 scrollTop의 위치 값이 변수 scrollPos에 담김
  fix(); // fix 함수 호출 (아래에 함수 만들어 줌)
  fixHeader();

  function fix(){
    // 스크롤 위치값 1250보다 클 경우 (밑으로 내려갈 수록 숫자 큼) on 클래스 붙임 -> .fix .text 위치 bottom:10% 에서 위로 올라오면서 position fix로 바뀜
    if(scrollPos > 1250) {
      $('.fix .text').addClass('on');
    } else { // fix 시켜둔 on 클래스 지움 -> bottom:10%로 돌아감
      $('.fix .text').removeClass('on');
    }
    if(scrollPos > 2700) { // scroll 위치값 2700으로 많이 내려오면 fix되었던 것 해제
      $('.fix .text').removeClass('on');
    }
  }

  function fixHeader(){
    if(scrollPos > 80){
      $('header').addClass('on');  // header에 on클래스 더해짐
    }
    else{
      $('header').removeClass('on') // header에 on클래스 제거
    }
  }
})