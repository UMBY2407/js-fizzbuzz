for(let i=1; i<=100;i++){
    if(i%3==0){
        if(i%5==0){
            //console.log("fizzbuzz");
            document.getElementById("boxContainer").innerHTML += `
            <div class="square">
                <p>fizzbuzz</p>
            </div>
            `;
        }else{
            //console.log("fizz");
            document.getElementById("boxContainer").innerHTML += `
            <div class="square">
                <p>fizz</p>
            </div>
            `;
        }
    }else if(i%5==0){
        //console.log("buzz");
        document.getElementById("boxContainer").innerHTML += `
        <div class="square">
            <p>buzz</p>
        </div>
        `;
    }else{
        //console.log(i);
        document.getElementById("boxContainer").innerHTML += `
        <div class="square">
            <p>${i}</p>
        </div>
        `;
    }
}