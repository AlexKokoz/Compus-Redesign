$(
    /* Input label toggle */
    $('.session .field-item input').focus(function () {
        if (!$(this).val()) {
            $(this).next().addClass('active');
        }
    }),

    $('.session .field-item input').blur(function () {
        if (!$(this).val()) {
            $(this).next().removeClass('active');
        }
    }),

    /* Login/Signup toggle */
    $('#toggleLogin').click(function () {
        $('.sessions .login-session').show();
        $('.sessions .signup-session').hide();
    }),

    $('#toggleSignup').click(function () {
        $('.sessions .signup-session').show();
        $('.sessions .login-session').hide();
    }),

    /* Form categories' toggles */
    $('#toggleStudent').click(function () {
        $('.sessions .form-category').removeClass('active');
        $(this).addClass('active');
        $('.sessions .forms form').removeClass('active');
        $('#studentForm').addClass('active');
    }),

    $('#toggleProfessor').click(function () {
        $('.sessions .form-category').removeClass('active');
        $(this).addClass('active');
        $('.sessions .forms form').removeClass('active');
        $('#professorForm').addClass('active');
    }),

    $('#toggleVisitor').click(function () {
        $('.sessions .form-category').removeClass('active');
        $(this).addClass('active');
        $('.sessions .forms form').removeClass('active');
        $('#visitorForm').addClass('active');
    })
);