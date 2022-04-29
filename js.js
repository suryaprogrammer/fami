let root = document.getElementById("root");

for (let i = 0; i < 20; i++) {
   
    

root.innerHTML +=`
<div id="card">

    <div id="inner_card1" class="inner_card">
        <!-- <img id="img" src="https://www.terabox.com/fe-opera-static/box-static/disk-system/images/favicon.ico" alt="img"> -->
    </div>
    <div id="inner_card2" class="inner_card">
        <h1>village !</h1>

    </div>
    <div id="inner_card3" class="inner_card">
        <button type="button" class="btn btn-primary">Img</button>
    <a href="#b">
    <button onclick="vedio()" type="button" class="btn btn-secondary">Vedio</button></a>
        <button class="btn"><i class="fa fa-download"></i> Download</button>
    </div>
</div>`;

}

function vedio(params) {
let vedio = document.getElementById("ve");

    vedio.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/JLicILeylnk"  frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}