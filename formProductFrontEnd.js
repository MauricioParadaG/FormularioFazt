class Product{
	constructor(productName, productPrice, productYear){
		this.productName = productName;
		this.productPrice = productPrice;
		this.productYear = productYear;
	}
}

// Metodos todos relacionados a la interfaz
class UserInterface {
	// recibe el parametro product a mostrar
	listProduct(product){
		const getListProduct = document.getElementById("product-list");
		// Creando div 
		const newElementHTML = document.createElement("div");
		// llenado el div creado, con `` tiene clase bootstrap, el card-body, muestra una tabla muy agradable a la vista
		newElementHTML.innerHTML = ` 
			<div class="card text-center mb-4">
				 <div class= "card-body">
				 	<strong>Product Name</strong>: ${product.productName}
				 	<strong>Product Price</strong>: ${product.productPrice}
				 	<strong>Product Year</strong>: ${product.productYear}
				 	<a href="#" class="btn btn-danger" name="delete">Delete</a>
				</div>
			</div>
		`;
		// Insertando elemento div creado, como un hijo
		getListProduct.appendChild(newElementHTML);
		this.resetForm();
	}

	resetForm(){
		formular.reset();
	}
	// Comprobar si este element es <a>, no importa el parametro que se pase, puede tener el nombre que sea.
	deleteProduct(element){
		if (element.name == "delete"){
			//nos pusimos a crear 3 div, nos toca eliminar todo
			element.parentElement.parentElement.parentElement.remove();
			// Colores danger, info
			this.showMessage("Product deleted from the list successfully","info");
		}
	}
	// 2 parametros, el mensaje que recibe en el objeto creado y la alerta del mensaje que es una class color de bootstrap
	showMessage(message,cssClass){
		const messageElementHTML = document.createElement("div");
		//antes se hacia alert-" + cssClass pero es viejo
		messageElementHTML.className = `alert alert-${cssClass} mt-2`;
		messageElementHTML.appendChild(document.createTextNode(message));
		// Show in DOM
		const getTopClass = document.getElementsByClassName("container")[0];
		const getWholeApp = document.getElementById("App");
		// Insertando entre el container y la App
		getTopClass.insertBefore(messageElementHTML,getWholeApp);
		// temporalizador del mensaje, con .alert son que empiezan
		setTimeout(function(){
		const getMessageElement = document.getElementsByClassName("alert")[0];
		getMessageElement.remove();
					}, 4000);
	}
/*
	editProduct(){
	}

	addProduct(){
		
		}

	*/
}


// Dom Events
const formular = document.getElementById("product-form");
const getNameProduct = document.getElementById("productName");
const getPriceProduct = document.getElementById("productPrice");
const getYearProduct = document.getElementById("productYear");

//con submit, la pagina se refresca. Para que no se refresque por defecto, debo capturar un evento con event.preventDefault(). para eso debo recibirlo en la funcion
	formular.addEventListener("submit", function(event){
		const name = getNameProduct.value;
		const price = getPriceProduct.value;
		const year = getYearProduct.value;
		
		const product = new Product (name,price,year);
		//olvide crear nuevo objeto de UserInterface
		const interface = new UserInterface ();
		
		if(name === "" || price ==="" || year === ""){
			interface.showMessage("Please fill all the form","danger");
			return
		} 
				
		//const messageNewProduct = new UserInterface("Product added and listed successfully", );

		//llamando metodo de class UserInterface
		interface.listProduct(product);
		//interface.resetForm();
		interface.showMessage("Product added and listed successfully","success");

		event.preventDefault();
		}
	);


const getDeleteId = document.getElementById("product-list");
// Este no es el submit, esta es la derecha donde se lista
getDeleteId.addEventListener("click",function(event){
	// Igualito que cuando listamos el producto arriba
	const interface = new UserInterface ();

	interface.deleteProduct(event.target);
	// interface.showMessage("Product deleted from the list successfully","success");
	//interface.deleteProduct 

}

);















