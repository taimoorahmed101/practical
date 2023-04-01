jQuery('#frm').validate({
	rules:{
		name:"required",
		lastname:"required",
		email:{
			required:true,
			email:true
		},
		password:{
			required:true,
			minlength:5
		},
		number:{
			required:true,
			minlength: 11
		},
	},messages:{
		name:"Please enter your name",
		lastname:"Please enter your last name",
		email:{
			required:"Please enter email",
			email:"Please enter valid email",
		},
		password:{
			required:"Please enter your password",
			minlength:"Password must be 5 char long"
		},
		number:{
			required:"Please enter your phone number",
			minlength:"number must be 11 char long"
		},
	},
	submitHandler:function(form){
		form.submit();
	}
});