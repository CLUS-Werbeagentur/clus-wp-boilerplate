<?php get_header(); ?>

  <main class="wrapper">
    <?php if (have_posts()) : while (have_posts()) : the_post();
      get_template_part('partials/elements');
    endwhile; endif; ?>
    <?php if(is_front_page()){ ?>
      <div class="react" id="react"></div>
    <?php } ?>
  </main>

<?php get_footer(); ?>
