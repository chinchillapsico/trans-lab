$(document).ready(function() {
	
    $('#contact_form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
             
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingresa tu e-mail.'
                    },
                    emailAddress: {
                        message: 'Por favor ingresa una dirección de correo válida.'
                    }
                }
            },
           
            password: {
                validators: {
                    notEmpty: {
                        message: 'Por favor ingresa tu contraseña.'
                    },
                    numeric: {
                            message: 'Tu contraseña debe contener solo números',
                        },
                    stringLength: {
                        min: 4,
                        max: 8,
                    	},    
                	}
           		 },
            
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
     });
});

