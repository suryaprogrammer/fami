


function btn_dark(){
    
}

fetch("data.json").then(res => res.json())
.then(data => {
    let root = document.getElementById("root");

    for (let i = 0; i < 20; i++) {
       
        
    
    root.innerHTML +=`
    <div  id="card">
    
        <div id="inner_card1" class="inner_card">
          <img id="img" src="${data[i].bgc}">
        </div>
        <div id="inner_card2" class="inner_card">
            <h1>${data[i].topic}</h1>
    
        </div>
        <div id="inner_card3" class="inner_card">
           <a href="${data[i].img}"> <button type="button" class="btn btn-primary">Img</button></a>
        <a href="#b">
        <button onclick="vedio()" type="button" class="btn btn-secondary">Vedio</button></a>
            <button class="btn"><i class="fa fa-download"></i> Download</button>
        </div>
    </div>`;
    // return data;

    }

  
});


function vedio() {
    
    let vedio = document.getElementById("ve");
    alert("hi");
        vedio.innerHTML=`${data[1].link}`;
    }