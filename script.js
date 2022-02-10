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

//if user click on the add button
addBtn.onclick = () =>{
    let userData = inputbox.value;//getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo");//key로 부터 데이터 읽기
    if(getLocalStorage == null){//if localStorage is null
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage);//string 객체를 json 객체로 변환
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr));//key에 데이터(value) 쓰기  /     stringify 메소드는 json 객체를 String 객체로 변환시켜 줍니다.

}