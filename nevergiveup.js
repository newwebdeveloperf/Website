//alert("what are you");

function valid_form(frm1){

	if(frm1.uname.value==""){
		fix_element("Please enter your username!",frm1.uname);
		frm1.uname.value="";
		return false;
	}

	if(frm1.p.value==""){
		fix_element("Pls create a strong password!",frm1.p);
		frm1.p.value="";
		return false;
	}

	if(frm1.e.value==""){
		fix_element("Please enter your email!",frm1.e);
		frm1.e.value="";
		return false;
	}

	if(frm1.s.value==""){
		fix_element("Please Choice a skill you will learn!",frm1.s);
		frm1.s.value="";
		return false;
	}

		function fix_element(msg, element){
			alert(msg);
			element.focus();
		}
}