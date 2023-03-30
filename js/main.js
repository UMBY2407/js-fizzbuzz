for(let i=1; i<=100;i++){
    if(i%3==0){
        if(i%5==0){
            //console.log("fizzbuzz");
            document.getElementById("boxContainer").innerHTML += `
            <div class="squareFizzBuzz">
                <p>fizzbuzz</p>
            </div>
            `;
        }else{
            //console.log("fizz");
            document.getElementById("boxContainer").innerHTML += `
            <div class="squareFizz">
                <p>fizz</p>
            </div>
            `;
        }
    }else if(i%5==0){
        //console.log("buzz");
        document.getElementById("boxContainer").innerHTML += `
        <div class="squareBuzz">
            <p>buzz</p>
        </div>
        `;
    }else{
        //console.log(i);
        document.getElementById("boxContainer").innerHTML += `
        <div class="squareI">
            <p>${i}</p>
        </div>
        `;
    }
}