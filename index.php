<?php get_header(); ?>

  <main>
    <?php if (have_posts()) : while (have_posts()) : the_post();
      get_template_part('partials/elements');
    endwhile; endif; ?>
    <div id="react"></div>
  </main>

<?php get_footer(); ?>
