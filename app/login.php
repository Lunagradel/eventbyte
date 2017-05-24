<section class="admin-login">
    <h2>Eventbyte Login</h2>
    <input type="text" placeholder="Username">
    <input type="password" placeholder="Password">
    <div class="login-btn">Send</div>
</section>

<script>
    
    $(".login-btn").click(
        function () {
            $.post( "ajax/test.html", function( data ) {
                $( ".result" ).html( data );
            });
        }
    );
</script>