var boxes= document.querySelectorAll(".btn");
var restBtn=document.querySelector(".reset");

var showWinner=document.querySelector(".player");

var winner2=document.querySelector('.winner');

var newgame=document.querySelector('.new-btn');


var player=true;
var winnerCondition=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]
const resetgamebtn=()=>{
    enabledbox();
    player=false;
}
boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        if(player)
        {
            box.innerHTML="X";
            player=false;
        }else{
            box.innerHTML="O";
            player=true;
        }
      box.disabled=true;
      checkWinner();
    })
})

const disabledbox =()=>{
    for(let i of boxes)
    {

        i.disabled=true;
    }
}

const enabledbox =()=>{
    for(let i of boxes)
    {
        
        i.disabled=false;
        
        i.innerHTML="";
    }
    winner2.classList.add("hide");
    
}
const checkWinner=()=>{
    for(let pos of winnerCondition)
    {
    
        // console.log(,boxes[pos[1]].innerText,boxes[pos[2]].innerText);
        var post1= boxes[pos[0]].innerText;
        var post2= boxes[pos[1]].innerText;
        var post3= boxes[pos[2]].innerText;
       if(post1 !="" && post2!="" && post3 !="")
       {
        if(post1===post2 && post2===post3)
        {
            winnerMsg(post1);
        }
    }
}
}

const winnerMsg=(winplayer)=>{
    showWinner.innerHTML= `Winner is ${winplayer}`;
    
    winner2.classList.remove('hide');
    disabledbox();

}


restBtn.addEventListener("click",resetgamebtn);
newgame.addEventListener("click",resetgamebtn);
