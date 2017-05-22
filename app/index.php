<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>eventByte</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/frontpage.css">
    <script src="https://use.fontawesome.com/bce7f6c050.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Lato|Overpass+Mono" rel="stylesheet">
  </head>
  <body>

    <div class="side-nav">
      <div class="close" id="closeNav">X</div>
    </div>
    <div class="main">
      <div class="gradient frontpage-top">
        <div class="top">
          <div class="burger-menu" id="openNav">
            <div class="menu-line"></div>
            <div class="menu-line"></div>
            <div class="menu-line"></div>
          </div>
          <?php require_once 'svg/logo.php' ?>
        </div>
      </div>
    </div>
      <section id="main">
          <p class="console">
              <span id="caption"></span><span id="cursor">_</span>
          </p>
      </section>
  <?php
  if ($_GET["id"]=="events"){
      include 'event-overview.php';
  }
  ?>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script>

  $(document).on("click", "#openNav", function(){
    $(".side-nav").css("width","60%");
    $("body").css("overflow", "hidden");
  });

  $(document).on("click", "#closeNav", function() {
    $(".side-nav").css("width","0");
    $("body").css("overflow", "auto");
  });

  </script>
  </body>
<script src="js/console.js"></script>
</html>
