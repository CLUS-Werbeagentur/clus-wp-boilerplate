<?php if( have_rows('contentelements') ):
  while ( have_rows('contentelements') ) :
    the_row();
    $element = get_row_layout();
    get_template_part('partials/elements/'.$element);
  endwhile;
endif; ?>
