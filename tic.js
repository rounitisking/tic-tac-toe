// WE ARE SELECTING ALL THE BUTTON Y QUEY SELECTOR ALL

var container = document.querySelector("#container")
var winner_txt = document.querySelector("#winner_txt")
var main = document.querySelector("#main") 

var game = document.querySelector("#game")

 
var boxes = document.querySelectorAll(".box")
var turn = true 
var win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
boxes.forEach((details)=>{
    details.addEventListener("click",()=>{
        
        
    
        if(turn){
            details.innerHTML = "0"
            // console.log(details.textContent)
            turn = false;
        }
        else{
            details.innerHTML = "X"
            // console.log(details.textContent)
            // console.log(details)

            turn = true;
        }
      
    details.disabled = true;
    winner()
    
    // yaha pe is disabledtag se ek bar button click krne ke baad click nhi hoga pr bgcolor grren hone lagega matlab jo color main ko doge 
    // vo color button le lega uske liye bas css mai bgcolor set krdo 
}

)
})



// ISS CODE MAI YE HAI KI JAB EK BAAR CLICK KAROGE THO IF CONDITION CHALEGI OR TRUE HONE PR TURN KO FALSE KR DEGI OR FIR JAB DUBARA CLICK KAROGE THO 
// TURN KI VALUE FALSE HAI THO ELSE CAHLEGA JO FIRSE TURN KO TRUE KR DEGA 
var winner = ()=>{
    for(var position of win){
        // console.log(position[0], position[1], position[2])
         var one = boxes[position[0]].innerHTML
            var two =  boxes[position[1]].innerHTML
            var three =  boxes[position[2]].innerHTML
        // iss upar vale line mai mai ye print karvana cah raha hu ki win ke 1st array ke 0 index pe kona box hoga same for every 
        // other boxes or agar boxes ke text ko print krna cahte ho tho textcontent ya innehtml


        // and ke liye && ka use hota hai.
        // or ke liye || ka use hota hai.
        
        if(one !=="" && two !== "" && three !== ""){
            if(one ===two && two ===three){
                console.log("winner")
                
                // alert(one, two, three, "is the winner")
                // or it can be written as this as one value is eual to all three values then only they are winner pr yaha one hi element print 
                // hoga kyuki alert ek hi argumen leta hai iska solution ye hai ki concatinaion ya template literal `${}` but yaha ek dikkat or aa rahi hai 
                // jab koi 0 ya x jitta hai uska last move se pehle alert chalta hai fir vo print hota hai 
                let currentWinner = one;

                    // ye maine let mai 0 ki sore isliye kri ai kyuki jab hamara player turn switich ho rhi hai tho ho sakta hai ki jab 
                    // msg display mai delay ho tab takutrn ki value badal jaygi tho one ki value tampre ho sakti hai isiliye pehle hi store kara 
                    // li taki baad mai usse use kr sake bina tampering ke  
                
              setTimeout(()=>{
                winner_txt.style.display ="block"
                winner_txt.innerHTML = `"the winner is"${currentWinner}`
                
                game.style.display = "none"

              },200)
               
                
                // alert(one + "is the winner") 
                                                                // or 
                // alert(`${one}is the winner`)
                
            }

          
}
    
    }
}


var reset = document.querySelector("#reset_b")
reset.addEventListener("click",function(){
    console.log("hi")
    reset()
})
var new_game = document.querySelector("#newgame_b")
new_game.addEventListener("click",function(){
    console.log("hi")
    reset()
})
var enable_box = ()=>{
   for(var box_ of boxes){
     box_.disabled = false
    box_.innerText= ""
   }
}
// issupar vale maine ye kiya hai ki maineboxes ko enable kr diya hai click se text print hon ke liye jismai maine txt k value black krdi fir 
// niche vale code mai maine trun function ko true kia hai or box ko dubara se chalu karva diya hai 

var reset = ()=>{
    turn = true
    enable_box()
    game.style.display = "block"
    game.style.display = "flex"

}