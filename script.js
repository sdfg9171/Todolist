//getting all required elements
const inputbox = document.querySelector(".inputField input")
const addBtn = document.querySelector(".inputField button")

inputbox.onkeyup = () =>{/*onkeyup 키보드를 떼었을때*/ 
    let userData = inputbox.value; //사용자가 입력한 값 가져오기
    if(userData.trim() != 0){//사용자 값이 공백만 아닌 경우
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active")
    }

}