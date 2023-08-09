$("#submit").click(function(e){

  e.preventDefault();

  if($("input[type = 'checkbox']:checked").length != 2){
    alert("약관에 동의하셔야 회원가입을 진행 할 수 있습니다.")
  }
  console.log($("input[type = 'checkbox']:checked").length)
})