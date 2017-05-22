<?php
$pageTitle = "Events"
?>

<div class="event-pop-wrapper canvas">
    <div class="event-pop">
      <section class="pop-top">
        <p class="pop-name">eventname_</p>
      </section>
      <section class="pop-important-info">
        <div class="information">
          <div class="info">
            <p class="info-header">day</p>
            <p class="info-body">01/02/17</p>
          </div>
          <div class="info">
            <p class="info-header">time</p>
            <p class="info-body">14:00</p>
          </div>
          <div class="info">
            <p class="info-header">location</p>
            <p class="info-body">Lygten 37</p>
          </div>
        </div>
        <div class="sign-up-button">
          <p>Sign Up</p>
        </div>
      </section>
      <section class="pop-information">
        <div class="pop-about">
          <p class="about-header">information</p>
          <p class="about-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>
        <div class="pop-about">
          <p class="about-header">requirements/</p>
          <p class="about-header">expectations</p>
          <p class="about-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
    </div>
</div>

<section class="overview">
    <div class="overview_top gradient">
        <h2>events</h2>
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
            <option value="volvo">Media</option>
            <option value="saab">Programming</option>
            <option value="mercedes">Maker</option>
            <option value="audi">Entertainment</option>
        </select>
        <input type="text" placeholder="Search" class="overview_filters-search">
    </div>
    <div class="overview-content list">
    </div>
</section>
