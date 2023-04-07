var discount = document.getElementById("DISCOUNT").value
var discountcode =["Suki0909","Gertie'sBakeshop","Billy101"];
var dicountedtotal=0;
var totalprice =0;

/*------------------------------------------------------------------*/
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

/*------------------------Discount---------------------------------*/
for(int x=0;x > 3;x++){
	if(discount.equals(discountcode[x])){
		discountedtotal = totalprice - 100;
		break;
	}else{
		discountedtotal = totalprice;
	}
}
/*--------------------------Check Out-------------------------------*/
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*--------------------------Switching tabs-------------------------------*/
		function btnallproducts(){
			document.getElementById("div1").style.display = 'block';
			document.getElementById("div2").style.display = 'block';
			document.getElementById("div3").style.display = 'block';
			document.getElementById("div4").style.display = 'block';
		}
		function btnbread(){
			document.getElementById("div1").style.display = 'block';
			document.getElementById("div2").style.display = 'none';
			document.getElementById("div3").style.display = 'none';
			document.getElementById("div4").style.display = 'none';
		}
		function btncakes(){
			document.getElementById("div1").style.display = 'none';
			document.getElementById("div2").style.display = 'block';
			document.getElementById("div3").style.display = 'none';
			document.getElementById("div4").style.display = 'none';
		}
		function btnnoodles(){
			document.getElementById("div1").style.display = 'none';
			document.getElementById("div2").style.display = 'none';
			document.getElementById("div3").style.display = 'block';
			document.getElementById("div4").style.display = 'none';
		}
		function btndishes(){
			document.getElementById("div1").style.display = 'none';
			document.getElementById("div2").style.display = 'none';
			document.getElementById("div3").style.display = 'none';
			document.getElementById("div4").style.display = 'block';
		}