<?php if(!(is_search() && function_exists('is_woocommerce') && is_woocommerce())): ?>
</div><!-- end .row -->
</div><!-- end .container -->
</main><!-- end .site-main -->
<?php endif; ?>
<?php //prefooter
echo anps_prefooter_banner_content();
?>
<?php
//check for blank page
$footer_value = '';
if($post) {
    $footer_value = get_post_meta($post->ID, $key ='anps_blank_page_disable_footer', $single = true );
}
if(!isset($footer_value) || $footer_value!='on') {
    get_sidebar( 'footer' );
}
?>
<?php if (get_option('anps_scroll_to_top', 0) == 1 ): ?>
    <button class="scroll-top" title="<?php esc_attr_e('Scroll to top', 'lapopsi'); ?>"><i class="fa fa-angle-up"></i></button>
<?php endif;?>
</div> <!-- .site-wrap -->
</div> <!-- .site -->
<?php wp_footer(); ?>
</body>
</html>
