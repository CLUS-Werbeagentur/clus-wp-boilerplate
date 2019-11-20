<?php

function isDev(){
  $connection = @fsockopen('localhost', '3000');
  return ($connection) ? true : false;
}

function enqueue_js() {
  if ( isDev() ) {
    wp_enqueue_script( 'script', 'http://localhost:3000/dev-bundle.js', [], null, true );
  }

  if ( ! isDev() ) {
    wp_enqueue_script( 'script', get_manifest_file( 'bundle.js' ), [], null, true );
  }
}

function enqueue_css() {
  if ( ! isDev() ) {
    wp_enqueue_style( 'styles', get_manifest_file( 'bundle.css' ), [], null );
  }
}

add_action( 'wp_enqueue_scripts', 'enqueue_js' );
add_action( 'wp_enqueue_scripts', 'enqueue_css' ); ?>
