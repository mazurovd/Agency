<?php 

// include_once(__DIR__.'/inc/Agency_text_widget.php');
// include_once(__DIR__.'/inc/Agency_text_widget(blue).php');

include_once __DIR__ . '/inc/Agency_text_widget.php';
include_once __DIR__ . '/inc/Agency_text_widget(blue).php';
include_once __DIR__ . '/inc/Agency_text_widget(blue2).php';
include_once __DIR__ . '/inc/Agency_text_widget(transprnt2).php';

add_action('wp_enqueue_scripts', 'Agency_scripts'); // Подкл-ие CSS и JS
 add_action('after_setup_theme', 'Agency_setup_theme'); // Подкл-ие логотипа и иконки

 add_action('widgets_init', 'Agency_widgets'); // Виджет
 add_action('widgets_init', 'Agency_widget_blue'); // Виджет
 add_action('widgets_init', 'Agency_widget_blue2'); // Виджет
 add_action('widgets_init', 'Agency_widgets_transprnt2'); // Виджет

 add_action('init', 'agency_registration'); // таксо и записи 

// add_filter('show_admin_bar', '__return_false'); - Убирает служ. строку в шапке

function Agency_scripts(){
    wp_enqueue_style(
        'styles_normil',
        get_template_directory_uri() . '/assets/Styles/normilize.css',
        [],
        '1.0.1',
        'all'
    );
    wp_enqueue_style(
        'slick_theme',
        get_template_directory_uri() . '/assets/Styles/slick-theme.css',
        ['styles_normil'],
        '1.0.0',
        'all'
    );
    wp_enqueue_style(
        'slick',
        get_template_directory_uri() . '/assets/Styles/slick.css',
        ['styles_normil'],
        '1.0.0',
        'all'
    );
    wp_enqueue_style(
        'styles',
        get_template_directory_uri() . '/assets/Styles/styles.css',
        ['styles_normil'],
        '1.0.0',
        'all'
    );

    wp_enqueue_script(
        'my-js-JQueryWeb',
        'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js?ver=3.6',
        [],
        '1.0.',
        true
    );
        wp_enqueue_script(
        'my-js-JQuery',
        get_template_directory_uri() . '/assets/JS/slick.min.js' ,
        ['my-js-JQueryWeb'],
        '1.0.',
        true
    );
    wp_enqueue_script(
        'my-js-fontawesome',
        'https://kit.fontawesome.com/f4bfe437e5.js',
        [],
        '1.0.',
        true
    );
    wp_enqueue_script(
        'my-js-Header',
        get_template_directory_uri() . '/assets/JS/header.js',
        ['my-js-JQuery'],
        '1.0.',
        true
    );
    wp_enqueue_script(
        'my-js-Reviews',
        get_template_directory_uri() . '/assets/JS/About-slick.js',
        [],
        '1.0.',
        true
    ); 
}

function Agency_images($name){
    echo get_template_directory_uri() . '/assets/IMG/' . $name;
} 


function Agency_setup_theme(){
    add_theme_support('custom-logo');
    add_theme_support('title-tag'); 
    add_theme_support('post-thumbnails');
    
    register_nav_menu('menu-header', 'Menu in header');
}

function Agency_widgets(){
    register_sidebar([
        'name' => 'First screen(transprnt1)',
        'id' => 'first-screen',
        'description' => 'Heading in first screen',
        'before widget' => null,
        'after widget' => null
    ]);
    
    register_widget('agency_text_widget');
    /* !!! */
}

function Agency_widgets_transprnt2(){
    register_sidebar([
        'name' => 'First screen(transprnt2)',
        'id' => 'First-screenTransprnt2',
        'description' => 'Heading in first screen',
        'before widget' => null,
        'after widget' => null
    ]);
    
    register_widget('agency_text_widget_transrnt2');
    /* !!! */
}

function Agency_widget_blue(){
    register_sidebar([
        'name' => 'First screen_blue_',
        'id' => 'First screen_blue_',
        'description' => 'Heading in first screen(blue)',
        'before widget' => null,
        'after widget' => null
    ]);
    
    register_widget('agency_text_widget_blue');
} 

function Agency_widget_blue2(){
    register_sidebar([
        'name' => 'First screen_blue_2',
        'id' => 'First screen_blue_2',
        'description' => 'Heading in first screen(blue2)',
        'before widget' => null,
        'after widget' => null
    ]);
    
    register_widget('agency_text_widget_blue2');
} 


function agency_registration(){
    register_taxonomy( 'Man', ['ManPhotes'], array(
        'labels' => array(
            'name' => 'Man who',
            'singular_name' => 'Man',
            'search_items' => 'Find Man',
            'all_items' => 'All Mans',
            'view_item ' => 'View Man',
            'edit_item' => 'Edit',
            'update_item' => 'Update',
            'add_new_item' => 'Add Man',
            'new_item_name' => 'Add Man',
            'menu_name' => 'All Mans',
        ),
        'description' => '',
        'public'    => true,
        'hierarchical' => true,
        'show_in_rest' => true
    ));
    
    register_post_type('ManPhotes', [
        'labels' => [
            'name' => 'ManPhoto',
            'singular_name' => 'ManPhoto',
            'add_new' => 'Add new ManPhoto',
            'add_new_item' => 'Add new ManPhoto',
            'edit_item' => 'Update the ManPhoto',
            
            'new_item' => 'A new ManPhoto',
            'view_item' => 'See the ManPhoto',
            'search_items' => 'Search',
            'not_found' => 'Nothing found yo',
            'not_found_in_trash' => 'Nothing in trash',
            'parent_item_colon' => '',
            'menu_name' => 'ManPhotes',
        ],
        'public'    => true,
        'menu position' => 20,
        'menu_icon' => 'dashicons-menu',
        'hierarchical' => false,
        'supports' => array('title', 'thumbnail'),
        'has_archive' => false,
        'show_in_rest' => true,
        'taxonomies' => ['Man']
    ]);
}

?>