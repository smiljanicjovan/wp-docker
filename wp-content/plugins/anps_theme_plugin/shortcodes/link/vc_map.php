<?php
vc_map( array(
    'name' => esc_html__('Link', 'anps_theme_plugin'),
    'base' => 'anps_link',
    'icon' => plugin_dir_url(__FILE__).'vc_icon.png',
    'category' => 'Anps Shortcodes',
    'is_container' => true,
    'params' => array(
        array(
            'type' => 'dropdown',
            'heading' => esc_html__( 'Icon library', 'js_composer' ),
            'value' => array(
                esc_html__( 'Font Awesome', 'js_composer' ) => 'fontawesome',
                esc_html__( 'Open Iconic', 'js_composer' ) => 'openiconic',
                esc_html__( 'Typicons', 'js_composer' ) => 'typicons',
                esc_html__( 'Entypo', 'js_composer' ) => 'entypo',
                esc_html__( 'Linecons', 'js_composer' ) => 'linecons',
                esc_html__( 'Mono Social', 'js_composer' ) => 'monosocial',
            ),
            'admin_label' => true,
            'param_name' => 'icon_type',
            'description' => esc_html__( 'Select icon library.', 'js_composer' ),
            'save_always' => true,
            'admin_label' => false,
        ),
        array(
            'type' => 'iconpicker',
            'heading' => esc_html__( 'Icon', 'js_composer' ),
            'param_name' => 'icon_fontawesome',
            'value' => '',
            'settings' => array(
                'emptyIcon' => true,
                'iconsPerPage' => 4000,
            ),
            'dependency' => array(
                'element' => 'icon_type',
                'value' => 'fontawesome',
            ),
            'description' => esc_html__( 'Select icon from library.', 'js_composer' ),
            'admin_label' => false,
        ),
        array(
            'type' => 'iconpicker',
            'heading' => esc_html__( 'Icon', 'js_composer' ),
            'param_name' => 'icon_openiconic',
            'settings' => array(
                'type' => 'openiconic',
                'iconsPerPage' => 4000,
            ),
            'dependency' => array(
                'element' => 'icon_type',
                'value' => 'openiconic',
            ),
            'description' => esc_html__( 'Select icon from library.', 'js_composer' ),
            'admin_label' => false,
        ),
        array(
            'type' => 'iconpicker',
            'heading' => esc_html__( 'Icon', 'js_composer' ),
            'param_name' => 'icon_typicons',
            'settings' => array(
                'type' => 'typicons',
                'iconsPerPage' => 4000,
            ),
            'dependency' => array(
                'element' => 'icon_type',
                'value' => 'typicons',
            ),
            'description' => esc_html__( 'Select icon from library.', 'js_composer' ),
            'admin_label' => false,
        ),
        array(
            'type' => 'iconpicker',
            'heading' => esc_html__( 'Icon', 'js_composer' ),
            'param_name' => 'icon_entypo',
            'settings' => array(
                'type' => 'entypo',
                'iconsPerPage' => 4000,
            ),
            'dependency' => array(
                'element' => 'icon_type',
                'value' => 'entypo',
            ),
            'admin_label' => false,
        ),
        array(
            'type' => 'iconpicker',
            'heading' => esc_html__( 'Icon', 'js_composer' ),
            'param_name' => 'icon_linecons',
            'settings' => array(
                'type' => 'linecons',
                'iconsPerPage' => 4000,
            ),
            'dependency' => array(
                'element' => 'icon_type',
                'value' => 'linecons',
            ),
            'description' => esc_html__( 'Select icon from library.', 'js_composer' ),
            'admin_label' => false,
        ),
        array(
            'type' => 'iconpicker',
            'heading' => esc_html__( 'Icon', 'js_composer' ),
            'param_name' => 'icon_monosocial',
            'settings' => array(
                'type' => 'monosocial',
                'iconsPerPage' => 4000,
            ),
            'dependency' => array(
                'element' => 'icon_type',
                'value' => 'monosocial',
            ),
            'description' => esc_html__( 'Select icon from library.', 'js_composer' ),
            'admin_label' => false,
        ),
        array(
            'type' => 'attach_image',
            'heading' => esc_html__('Custom icon image', 'anps_theme_plugin'),
            'param_name' => 'image',
            'description' => esc_html__('Upload a custom image icon.', 'anps_theme_plugin'),
            'admin_label' => false,
        ),
        array(
            'type' => 'checkbox',
            'heading' => esc_html__('Icon container', 'anps_theme_plugin'),
            'param_name' => 'icon_container',
            'value' => '',
            'admin_label' => false
        ),
        array(
            'type' => 'anps_input',
            'heading' => esc_html__('Icon container size', 'anps_theme_plugin'),
            'param_name' => 'icon_container_size',
            'admin_label' => true,
            'value' => '',
            'dependency' => array(
                'element' => 'icon_container',
                'value' => 'true',
            ),
            'admin_label' => false,
        ),
        array(
            'type' => 'vc_link',
            'heading' => esc_html__('Link', 'anps_theme_plugin'),
            'param_name' => 'link',
            'admin_label' => false,
        ),
        array(
            'type' => 'textfield',
            'heading' => esc_html__('Text', 'anps_theme_plugin'),
            'param_name' => 'text',
            'value' => '',
            'admin_label' => false
        ),
        array(
            'type' => 'colorpicker',
            'heading' => esc_html__('Icon color', 'anps_theme_plugin'),
            'param_name' => 'icon_color',
            'group' => esc_html__('Style', 'anps_theme_plugin'),
            'value' => '',
            'admin_label' => false,
        ),
        array(
            'type' => 'colorpicker',
            'heading' => esc_html__('Icon color (hover)', 'anps_theme_plugin'),
            'param_name' => 'icon_color_hover',
            'group' => esc_html__('Style', 'anps_theme_plugin'),
            'value' => '',
            'admin_label' => false,
        ),
        array(
            'type' => 'colorpicker',
            'heading' => esc_html__('Icon background color', 'anps_theme_plugin'),
            'param_name' => 'icon_bg_color',
            'group' => esc_html__('Style', 'anps_theme_plugin'),
            'value' => '',
            'admin_label' => false,
            'dependency' => array(
                'element' => 'icon_container',
                'value' => 'true',
            ),
        ),
        array(
            'type' => 'colorpicker',
            'heading' => esc_html__('Icon background color (hover)', 'anps_theme_plugin'),
            'param_name' => 'icon_bg_color_hover',
            'group' => esc_html__('Style', 'anps_theme_plugin'),
            'value' => '',
            'admin_label' => false,
            'dependency' => array(
                'element' => 'icon_container',
                'value' => 'true',
            ),
        ),
        array(
            'type' => 'colorpicker',
            'heading' => esc_html__('Text color', 'anps_theme_plugin'),
            'param_name' => 'text_color',
            'group' => esc_html__('Style', 'anps_theme_plugin'),
            'value' => '',
            'admin_label' => false,
        ),
        array(
            'type' => 'colorpicker',
            'heading' => esc_html__('Text color (hover)', 'anps_theme_plugin'),
            'param_name' => 'text_color_hover',
            'group' => esc_html__('Style', 'anps_theme_plugin'),
            'value' => '',
            'admin_label' => false,
        ),
        array(
            'type' => 'checkbox',
            'heading' => esc_html__('Center aligment', 'anps_theme_plugin'),
            'param_name' => 'center_aligment',
            'value' => '',
            'admin_label' => false
        ),
    ),
));
