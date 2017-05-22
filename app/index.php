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
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  </head>
  <body>
    <div class="gradient frontpage-top">
      <div class="top">
        <div class="burger-menu">
          <div class="menu-line"></div>
          <div class="menu-line"></div>
          <div class="menu-line"></div>
        </div>
        <?php require_once 'svg/logo.php' ?>
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
  </body>
<script src="js/console.js"></script>
</html>
