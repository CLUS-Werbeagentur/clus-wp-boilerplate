<?php if( have_rows('contentelements') ):

  while ( have_rows('contentelements') ) :
    the_row();
    $element = get_row_layout();
    get_template_part('partials/elements/'.$element);
  endwhile;

else: ?>

  <div class="element element--404">
    <h1>Whoops!</h1>
    <p>Diese Seite hat leider noch keinen Inhalt.</p>
  </div>

<?php endif; ?>
