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
  <h1>Webpack Playground</h1>
  <?php wp_nav_menu(array('theme_location' => 'primary', 'container' => 'ul')); ?>
</header>
