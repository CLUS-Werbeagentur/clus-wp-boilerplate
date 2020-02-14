<?php get_header(); ?>

  <main class="wrapper">
    <?php if (have_posts()) : while (have_posts()) : the_post();
      get_template_part('partials/elements');
    endwhile; endif; ?>
  </main>

<?php get_footer(); ?>
