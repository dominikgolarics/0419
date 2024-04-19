var jatek = []

function szamjatek() { 
    var boxvalue = document.getElementById('szam').value;
    jatek.push(boxvalue);
 }

function eredmeny(){
    console.log(jatek)
    // console.log(jatek[1]);
    
    for (let index = 0; index < jatek.length; index++) {
        if (index%2===0){
            max = Math.max(jatek[index])
            console.log(max)
        }
        if (jatek[index]==max) {
            jatek.splice(index,1)
            console.log(jatek)
        }
        else{
            
        }
    }
}