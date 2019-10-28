<?php // Autoload all PHP files in the functions/ folder.
foreach ( glob( __DIR__ . '/functions/*.php' ) as $filename ) {
  include_once $filename;
} ?>
