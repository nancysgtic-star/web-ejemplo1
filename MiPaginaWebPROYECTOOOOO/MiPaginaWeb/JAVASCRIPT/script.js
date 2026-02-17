//obtener el boton por su ID que se puso 
const boton1=document.getElementById('tilin');

// Agregar un elemento al boton
boton1.addEventListener('click' ,function(){
	alert("REFERENCIAS BIBLIOGRÁFICAS");
});
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu.style.width === "100%") {
        menu.style.width = "0";
    } else {
        menu.style.width = "100%";
    }
}