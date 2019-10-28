<?php

function isDev(){
  $connection = @fsockopen('localhost', '3000');
  return ($connection) ? true : false;
}

function enqueue_js() {
  // Include files only when in dev mode.
  if ( isDev() ) {
    wp_enqueue_script( 'script', 'http://localhost:3000/dev-bundle.js', [], '1.0.0', true );
  }

  // Include files only when in live mode.
  if ( ! isDev() ) {
    wp_enqueue_script( 'script', get_manifest_file( 'bundle.js' ), [], '1.0.0', true );
  }
}

function enqueue_css() {
  // Include files only when in dev mode. Our CSS will be served via JavaScript so it's not necessary to enqueue that here.

  // Include files only when in live mode.
  if ( ! isDev() ) {
    wp_enqueue_style( 'styles', get_manifest_file( 'bundle.css' ), [], '1.0.0' );
  }
}

add_action( 'wp_enqueue_scripts', 'enqueue_js' );
add_action( 'wp_enqueue_scripts', 'enqueue_css' ); ?>
