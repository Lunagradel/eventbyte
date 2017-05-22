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
      <div class="menu-points">
        <a class="menu-point" href="index.php?id=frontpage">HOME<?php
            if ($_GET["id"]=="frontpage"){
                echo '<span class="active-span">_</span>';
            }
            ?></a>
        <a class="menu-point" href="index.php?id=events">EVENTS<?php
            if ($_GET["id"]=="events"){
                echo '<span class="active-span">_</span>';
            }
            ?></a>
        <a class="menu-point">SPONSORS</a>
        <a class="menu-point">ABOUT</a>
      </div>
    </div>
    <div class="main">
      <!-- <div class="gradient frontpage-top"> -->
        <div class="top">
          <div class="burger-menu" id="openNav">
            <div class="menu-line"></div>
            <div class="menu-line"></div>
            <div class="menu-line"></div>
          </div>
          <?php require_once 'svg/logo.php' ?>

      </div>
        <section id="content">
            <?php
            if ($_GET["id"]=="frontpage"){
                include 'frontpage.php';
            }
            ?>
            <?php
            if ($_GET["id"]=="events"){
                include 'event-overview.php';
            }
            ?>
        </section>
    </div>



  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="js/console.js"></script>
  <script src="js/main.js"></script>
  <script src="js/overview.js"></script>
  </body>
</html>
