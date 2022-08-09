<?php
class WPBakeryShortCode_Box_Container extends WPBakeryShortCodesContainer {}

/* VC Box container */
vc_map( array(
    'name' => esc_html__('Box container', 'anps_theme_plugin'),
    'base' => 'box_container',
    'content_element' => true,
    'description' => esc_html__('Show content inside a box', 'anps_theme_plugin'),
    'category' => 'Anps Shortcodes',
    'icon' => plugin_dir_url(__FILE__).'vc_icon.png',
    'show_settings_on_create' => false,
    'is_container' => true,
    'params' => array(
        array(
            'type' => 'anps_input',
            'heading' => esc_html__('Padding', 'anps_theme_plugin'),
            'param_name' => 'anps_padding',
            'value' => '',
            'admin_label' => false
        ),
        array(
            'type' => 'checkbox',
            'heading' => esc_html__('Shadow', 'anps_theme_plugin'),
            'param_name' => 'shadow',
            'value' => '',
            'admin_label' => false
        ),
        array(
            'type' => 'css_editor',
            'heading' => esc_html__('CSS box', 'anps_theme_plugin'),
            'param_name' => 'css',
            'group' => esc_html__('Design options', 'anps_theme_plugin'),
        ),
    ),
    'js_view' => 'VcColumnView'
) );