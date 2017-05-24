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
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
  </head>
  <body>

    <div class="side-nav">
      <div class="close" id="closeNav">X</div>
      <div class="menu-points" id="notAdminMenu">
        <a class="menu-point" href="?id=frontpage">HOME<?php
            if ($_GET["id"]=="frontpage"){
                echo '<span class="active-span">_</span>';
            }
            ?></a>
        <a class="menu-point" href="?id=events">EVENTS<?php
            if ($_GET["id"]=="events"){
                echo '<span class="active-span">_</span>';
            }
            ?></a>
        <a class="menu-point" href="?id=sponsor">SPONSORS<?php
            if ($_GET["id"]=="sponsor"){
                echo '<span class="active-span">_</span>';
            }
            ?></a>
        <a class="menu-point" href="?id=about">ABOUT<?php
            if ($_GET["id"]=="about"){
                echo '<span class="active-span">_</span>';
            }
            ?></a>
      </div>
      <div class="menu-points" id="adminMenu">
        <a class="menu-point" href="?id=events">EVENTS<?php
            if ($_GET["id"]=="events"){
                echo '<span class="active-span">_</span>';
            }
            ?></a>
        <a class="menu-point" href="?id=sponsor">SPONSORS<?php
            if ($_GET["id"]=="sponsor"){
                echo '<span class="active-span">_</span>';
            }
            ?></a>
        <a class="menu-point" href="?id=create">CREATE<?php
            if ($_GET["id"]=="create"){
                echo '<span class="active-span">_</span>';
            }
            ?></a>
        <a class="menu-point" id="logOutBtn">LOG OUT</a>
      </div>
    </div>
    <div class="main">
      <!-- <div class="gradient frontpage-top"> -->
        <div class="top <?php
            if ($_GET["id"]=="events" || $_GET["id"]=="sponsor"){
                echo 'black-nav';
            }
            ?>">
          <div class="burger-menu" id="openNav">
            <div class="menu-line"></div>
            <div class="menu-line"></div>
            <div class="menu-line"></div>
          </div>
          <a href="index.php?id=frontpage"><?php require_once 'svg/logo.php' ?></a>
      </div>
        <section id="content">
            <?php
            $page = $_GET["id"];
            switch ($page){
                case "frontpage":
                    include 'frontpage.php';
                    break;
                case "events":
                    include 'event-overview.php';
                    break;
                case "sponsor":
                    include 'sponsor.php';
                    break;
                case "about":
                    include 'about.php';
                    break;
                case "admin":
                    include 'login.php';
                    break;
                case "create":
                    include 'create.php';
                    break;
                default:
                    include '404.php';
                    break;
            }
            ?>
        </section>
    </div>




  <script src="js/console.js"></script>
  <script src="js/main.js"></script>
  <script src="js/overview.js"></script>
  <script src="js/overlay.js"></script>
  <script src="js/create.js"></script>
  <script src="js/admin.js"></script>
  </body>
</html>
