<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>

<!-- Website made with CLUS.ch -->

<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header>
  <a class="header__homelink svg-icon" href="<?php echo get_home_url(); ?>" title="zur Startseite">
    <canvas width="165" height="18"></canvas>
    <?php get_template_part('partials/images/logo.svg'); ?>
    <span class="visually-hidden"><?php bloginfo( 'name' ); ?></span>
  </a>
  <?php wp_nav_menu(array('theme_location' => 'main', 'container' => 'ul', 'menu_class' => 'header__menu')); ?>
</header>
