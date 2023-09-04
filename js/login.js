//회원가입 제어
const join=document.querySelector("#join");
const userid=join.querySelector("#userid")
const pwd1=join.querySelector("#pwd1");
const pwd2=join.querySelector("#pwd2");
const btn_submit=join.querySelector("input[type=submit]");

btn_submit.addEventListener("click",e=>{
    e.preventDefault();

    let id_value=userid.value;
    let id_value_len=id_value.length;
    let pwd1_value=pwd1.value;
    let pwd2_value=pwd1.value;
    const num=/[0-9]/;
    const str=/[a-zA-Z]/;
    const spc=/[~!@#$%^&*()_+]/;

    if(id_value == "" || id_value_len<5){
        alert("아이디는 5글자 이상 입력하세요.");
    };

    if(pwd1_value != pwd2_value){
        alert("두개의 비밀번호를 동일하게 입력하세요.");
    };
    if(!num.test(pwd1_value)){
    alert("비밀번호에 숫자를 포함하세요.");
    };

    if(!spc.test(pwd1_value)){
    alert("비밀번호에 특수문자를 포함하세요.");
    };
});