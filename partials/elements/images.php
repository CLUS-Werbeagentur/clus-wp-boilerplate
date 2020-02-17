<?php $layout = get_sub_field('layout'); ?>

<div class="element element--images images--<?php echo $layout ?>">
  <?php // 1 image
  if($layout === '1'):
    $image_1 = get_sub_field('image-1');
    $image_srcset_1 = wp_get_attachment_image_srcset($image_1['ID'], 'large'); ?>
    <?php if($image_1): ?>
      <img class="image image--1" src="<?php echo esc_url($image_1['sizes']['large']); ?>" srcset="<?php echo esc_attr($image_srcset_1); ?>" sizes="" width="<?php echo $image_1['sizes']['large-width']; ?>" height="<?php echo $image_1['sizes']['large-height']; ?>" title="<?php echo $image_1['title']; ?>" alt="<?php echo $image_1['alt']; ?>">
    <?php endif; ?>
  <?php endif;

  // 2 images
  if($layout === '2'):
    $image_1 = get_sub_field('image-1');
    $image_srcset_1 = wp_get_attachment_image_srcset($image_1['ID'], 'medium');
    $image_2 = get_sub_field('image-2');
    $image_srcset_2 = wp_get_attachment_image_srcset($image_2['ID'], 'medium'); ?>
    <?php if($image_1): ?>
      <div class="image image--1">
        <img src="<?php echo esc_url($image_1['sizes']['medium']); ?>" srcset="<?php echo esc_attr($image_srcset_1); ?>" sizes="" width="<?php echo $image_1['sizes']['medium-width']; ?>" height="<?php echo $image_1['sizes']['medium-height']; ?>" title="<?php echo $image_1['title']; ?>" alt="<?php echo $image_1['alt']; ?>">
      </div>
    <?php endif; ?>
    <?php if($image_2): ?>
      <div class="image image--2">
        <img src="<?php echo esc_url($image_2['sizes']['medium']); ?>" srcset="<?php echo esc_attr($image_srcset_2); ?>" sizes="" width="<?php echo $image_2['sizes']['medium-width']; ?>" height="<?php echo $image_2['sizes']['medium-height']; ?>" title="<?php echo $image_2['title']; ?>" alt="<?php echo $image_2['alt']; ?>">
      </div>
    <?php endif; ?>
  <?php endif;

  // 3 images
  if($layout === '3-left' || $layout === '3-right'):
    $image_1 = get_sub_field('image-1');
    $image_src_1 = wp_get_attachment_image_url($image_1['ID'], 'medium');
    $image_srcset_1 = wp_get_attachment_image_srcset($image_1['ID'], 'medium');
    $image_2 = get_sub_field('image-2');
    $image_src_2 = wp_get_attachment_image_url($image_2['ID'], 'medium');
    $image_srcset_2 = wp_get_attachment_image_srcset($image_2['ID'], 'medium');
    $image_3 = get_sub_field('image-3');
    $image_src_3 = wp_get_attachment_image_url($image_3['ID'], 'medium');
    $image_srcset_3 = wp_get_attachment_image_srcset($image_3['ID'], 'medium'); ?>
    <div class="images__landscape">
      <?php if($image_1): ?>
        <img class="image image--1" src="<?php echo esc_url($image_src_1); ?>" srcset="<?php echo esc_attr($image_srcset_1); ?>" sizes="" width="<?php echo $image_1['sizes']['medium-width']; ?>" height="<?php echo $image_1['sizes']['medium-height']; ?>" title="<?php echo $image_1['title']; ?>" alt="<?php echo $image_1['alt']; ?>">
      <?php endif; ?>
      <?php if($image_2): ?>
        <img class="image image--2" src="<?php echo esc_url($image_src_2); ?>" srcset="<?php echo esc_attr($image_srcset_2); ?>" sizes="" width="<?php echo $image_2['sizes']['medium-width']; ?>" height="<?php echo $image_2['sizes']['medium-height']; ?>" title="<?php echo $image_2['title']; ?>" alt="<?php echo $image_2['alt']; ?>">
      <?php endif; ?>
    </div>
    <div class="images__portrait">
      <?php if($image_3): ?>
        <div class="image image--3">
          <img src="<?php echo esc_url($image_src_3); ?>" srcset="<?php echo esc_attr($image_srcset_3); ?>" sizes="" width="<?php echo $image_3['sizes']['medium-width']; ?>" height="<?php echo $image_3['sizes']['medium-height']; ?>" title="<?php echo $image_3['title']; ?>" alt="<?php echo $image_3['alt']; ?>">
        </div>
      <?php endif; ?>
    </div>
  <?php endif; ?>
</div>
