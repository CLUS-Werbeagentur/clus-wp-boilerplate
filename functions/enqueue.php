<?php

// Check for development environment
//----------------------------------------------------------
function isDev(){
  $connection = @fsockopen('localhost', '3000');
  return ($connection) ? true : false;
}

// Register scripts & styles
//----------------------------------------------------------
function clus_styles() {
  wp_dequeue_style( 'wp-block-library' );

  if ( ! isDev() ) {
    wp_enqueue_style( 'styles', get_manifest_file( 'bundle.css' ), [], null );
  }
}
add_action( 'wp_enqueue_scripts', 'clus_styles' );

function clus_scripts() {
  wp_deregister_script('wp-embed');
  wp_dequeue_script('jquery');
  wp_dequeue_script('jquery-core');
  wp_dequeue_script('jquery-migrate');

  if ( isDev() ) {
    wp_enqueue_script( 'script', '/dev-bundle.js', [], null, true );
  } else {
    wp_enqueue_script( 'script', get_manifest_file( 'bundle.js' ), [], null, true );
  }
}
add_action( 'wp_enqueue_scripts', 'clus_scripts' );

// Editor style
//----------------------------------------------------------
add_editor_style( 'editor-style.css' ); ?>
