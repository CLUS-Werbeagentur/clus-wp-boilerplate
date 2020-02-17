<?php $layout = get_sub_field('layout');
$image = get_sub_field('image');
$content = get_sub_field('content'); ?>

<div class="element element--image-text image-text--<?php echo $layout; ?>">
  <?php if ( $content ) : ?>
    <div class="image-text__text content-text-area">
      <?php echo $content; ?>
    </div>
  <?php endif;
  if ( $image ) :
    $image_src = wp_get_attachment_image_url($image['ID'], 'medium');
    $image_srcset = wp_get_attachment_image_srcset($image['ID'], 'medium'); ?>
    <div class="image-text__image">
      <img src="<?php echo esc_url($image_src); ?>" srcset="<?php echo esc_attr($image_srcset); ?>" sizes="<?php echo $sizes; ?>" width="<?php echo $image['sizes']['medium-width']; ?>" height="<?php echo $image['sizes']['medium-height']; ?>" title="<?php echo $image['title']; ?>" alt="<?php echo $image['alt']; ?>">
    </div>
  <?php endif; ?>
</div>
