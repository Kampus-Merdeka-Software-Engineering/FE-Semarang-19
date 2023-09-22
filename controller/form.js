const h1 = document.getElementsByTagName("h1")[0];
    h1.style.borderRadius = "10px";
    h1.style.fontStyle = "bold";
    h1.style.textAlign = "center";
    h1.style.fontFamily = "comic sans ms"

const form = document.getElementsByTagName("form")[0];
    form.style.borderRadius = "20px";
    form.style.boxShadow = `10px 10px black`;

const inputs = document.getElementsByTagName ("input");
    for ( i = 0; i < inputs.length ; i++){
        inputs[i].style.borderRadius = "5px";
        }

const option = document.getElementsByTagName ("option");

    option[0].style.borderRadius = "5px";

const order=document.querySelector(".tbl-biru")
    order.addEventListener("mouseenter", function() {
    order.style.backgroundColor = "black";

});
    order.addEventListener("mouseleave", function() {
    order.style.backgroundColor = "#3f72af";
});


const ubahMenu = document.querySelectorAll("li");
for (let i = 0; i<4; i++) {
    ubahMenu [i].addEventListener("mouseenter", function() {
        ubahMenu[i].style.backgroundColor = "white";
        ubahMenu[i].style.borderRadius = "10px";
        ubahMenu[i].style.marginTop = "10px";
        ubahMenu[i].style.height = "50px";
    });
    ubahMenu[i].addEventListener("mouseleave", function() {
        ubahMenu[i].style.backgroundColor = "#b0b0b0";
    });
}