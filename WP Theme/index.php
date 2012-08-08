<?php
/*
Template Name: Event Theme [@@Location@@] [@@Description@@]
*/
?>


<?php include (TEMPLATEPATH . '/EventTheme_[@@Location@@]_[@@Description@@]_header.php'); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<?php the_content(__('Read more'));?>

<?php endwhile; else: ?>
	<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>

<?php endif; ?>	
        

<?php include (TEMPLATEPATH . '/EventTheme_[@@Location@@]_[@@Description@@]_footer.php'); ?>