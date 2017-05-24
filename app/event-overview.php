<?php
$pageTitle = "Events"
?>

<div class="event-pop-wrapper canvas">
    <div class="event-pop">
      <div class="close" id="closePop">X</div>
      <section class="pop-top">
        <p class="pop-name">eventname_</p>
      </section>
      <section class="pop-important-info">
        <div class="information">
          <div class="info">
            <p class="info-header">day</p>
            <p class="pop-date info-body">01/02/17</p>
          </div>
          <div class="info">
            <p class="info-header">time</p>
            <p class="pop-time info-body">14:00</p>
          </div>
          <div class="info">
            <p class="info-header">location</p>
            <p class="pop-address info-body">Lygten 37</p>
          </div>
        </div>
        <div class="sign-up-button" id="showSignUp">
          <p>Sign Up</p>
        </div>
      </section>
      <section class="pop-sign-up hidden">
        <div class="sign-up">
          <input type="text" name="" value="" placeholder="Name">
          <input type="text" name="" value="" placeholder="E-mail">
          <div class="submit-button" id="signUpBtn">
            <p>Submit</p>
          </div>
        </div>
        <div class="sign-up-thx">
          <p>Thank you for signing up. We sent you a confirmation email.</p>
        </div>
      </section>
      <section class="pop-information">
        <div class="pop-about">
          <p class="about-header">information</p>
          <p class="pop-desc about-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>
        <div class="pop-about">
          <p class="about-header">requirements/</p>
          <p class="about-header">expectations</p>
          <p class="pop-req about-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
      <section class="pop-tags">
        <div class="tags-header">
          <p>tags:</p>
        </div>
        <div class="tags">
          <p class="tag">#tech</p>
          <p class="tag">#tech</p>
        </div>
      </section>
      <section class="map">
<!--        <iframe id="googleMap" width="300" height="170" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q='+YOUR_LAT+','+YOUR_LON+'&hl=es;z=14&amp;output=embed"></iframe>-->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.1399962285113!2d12.535302515881423!3d55.70393828054034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652524912e8e8a1%3A0x6a2ccf5cf3935c0e!2sKEA+IT+TECHNOLOGY!5e0!3m2!1sda!2sdk!4v1495475823364" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </section>
    </div>
</div>

<section class="overview">
    <div class="overview_top gradient">
        <p>events</p>
    </div>
    <div class="overview_filters">
        <div class="overview_filters-view">
            <div>Select View</div>
            <div>
                <span class="" id="overview-calendar"><i class="fa fa-calendar fa-lg" aria-hidden="true"></i></span>
                <span class="active" id="overview-list"><i class="fa fa-bars fa-lg" aria-hidden="true"></i></span>
                <span class="" id="overview-grid"><i class="fa fa-th fa-lg" aria-hidden="true"></i></span>
            </div>
        </div>
        <select class="overview_filters-selector">
            <option value="" disabled selected>Filter</option>
            <option value="Media">Media</option>
            <option value="Programming">Programming</option>
            <option value="Marker">Maker</option>
            <option value="Entertainment">Entertainment</option>
        </select>
        <input type="text" placeholder="Search" class="overview_filters-search">
    </div>
    <div class="overview-content list">
    </div>
</section>
