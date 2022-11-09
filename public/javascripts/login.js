const reqURL = 'http://localhost:8000/';

function submitForm() {
    if (login_validation()) {
        // THIS IS WHERE THE TRANSLATED PHP CODE WILL GO, TO MAKE A POST CALL TO THE SERVER TO CREATE NEW USER

        let user = {};
        // gather html elements into variables
        user.username = $("#username").val();
        user.password = $('#login_password').val();

        // send the data to the server
        $.ajax({
            url: reqURL + 'login', 
            type: "POST",
            data: user,
            success: function(result){
                // do something - redirect to home page?
            }
        });
    }
    
    // on error, grab .error_message element and display error message
}

function login_validation() {
	var valid = true;
	$("#username").removeClass("error_field");
	$("#password").removeClass("error_field");

	var UserName = $("#username").val();
	var Password = $('#login_password').val();

	$("#username_info").html("").hide();

	if (UserName.trim() == "") {
		$("#username_info").html("User name is required.").css("color", "red").show();
		$("#username").addClass("error_field");
		valid = false;
	}
	if (Password.trim() == "") {
		$("#login_password_info").html("Password is required.").css("color", "red").show();
		$("#login_password").addClass("error_field");
		valid = false;
	}
	if (valid == false) {
		$('.error_field').first().focus();
		valid = false;
	}
	return valid;
}