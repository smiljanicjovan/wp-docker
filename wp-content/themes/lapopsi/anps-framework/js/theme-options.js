"use strict";

jQuery(document).ready(function($) {
    /* Detect changes */
    var changedOptions = [];
    var $valueFields = $('input[type="text"], input[type="number"], textarea, select');
    var $activeFields = $('input[type="checkbox"], input[type="radio"]');
    var saveNotClicked = true;

    $valueFields.each(function() {
        $(this).attr('data-saved', $(this).val());
    });

    function fieldsChange(type) {
        var index = changedOptions.indexOf($(this).attr('name'));
        var check = $(this).attr('data-saved') != $(this).val();

        if ($(this).attr('type') === 'checkbox' || $(this).attr('type') == 'radio') {
            check = index === -1;
        }

        if (check) {
            if (index === -1) {
                changedOptions.push($(this).attr('name'));
            }
        } else {
            changedOptions.splice(index, 1);
        }
    }

    $valueFields.on('change', fieldsChange);
    $activeFields.on('change', fieldsChange);

    $('button[type="submit"]').on('click', function() {
        saveNotClicked = false;
    });

    $(window).on('beforeunload', function(e) {
        if (changedOptions.length && saveNotClicked) {
            var confirmationMessage = 'Your settings changes are not saved';

            return confirmationMessage;
        }
    });

    /* Button */

    var offset = 140;
    var $admin = $('.anps-admin');

    function saveButtonPos() {
        var adminOffset = $admin.offset();

        $('.fixsave').css({
            left: adminOffset.left +  $admin.width() + 'px',
            top: adminOffset.top + offset + 'px',
        });
    }

    saveButtonPos();
    $(window).on('resize', saveButtonPos);

    //live upload image display
    $('.anps_upload input[type="text"]').on('change', function(){
        var input = $(this);

        if(input.siblings('.preview-img').length) {
            var newimage = input.val();

            //if preview is hidden, show it.
            $(this).siblings('.preview-img').removeClass('hidden');

            //change attribute to the new image.
            var image = $(this).siblings('.preview-img').find('img');
            if (image.length) {
                image.attr('src', newimage );
             }
        }
            if (input.val() =="") {
            $(this).siblings('.preview-img').addClass('hidden');
        }
    });

    //Set min width on desktop mode only
    if ($(window).width() > 1400) {
        $('[data-minheight]').each( function(){
            $(this).css('min-height', $(this).data('minheight'));
        })
    }

    function dimmGlobal() {
        var dimMaster = $('.set-global');
        var dimmSlaves = $('.global-options *');

        if( dimMaster.find('input').is(":checked") && ($('label[data-show="top"]').hasClass('selected')|| $('label[data-show="style2"]').hasClass('selected'))) {
            dimmSlaves.css('pointer-events', 'none');
            dimmSlaves.css('opacity', '0.6');
        } else {
            dimmSlaves.css('opacity', '1');
            dimmSlaves.css('pointer-events', 'auto');
        }
        /*hide transparent option on style 2*/
        if ($('label[data-show="style2"]').hasClass('selected')) {
            $('.hideifstle2').hide();
        } else {
            $('.hideifstle2').show();
        }
		/*hide menu center option on style 4*/
        if ($('label[data-show="style4"]').hasClass('selected')) {
            $('.hideifstyle4').hide();
        } else {
            $('.hideifstyle4').show();
        }
        dimmToggle();
    }
    $('.set-global input').on('change', function() {
        dimmGlobal();
    });

    $('.top-or-bottom input').on('change', function() {
        dimmGlobal();
    });

    dimmGlobal();

    /* dimm toggle */
    function dimmToggle() {
        $('.dimm-master').each(function(){

            var dimMaster = $(this);
            var dimmSlaves = dimMaster.siblings('.dimm');
            var dimmRebels = dimMaster.siblings('.dimmreverse');

            if( dimMaster.find('input').is(":checked")) {
                dimmSlaves.css('opacity', '1');
                dimmSlaves.css('pointer-events', 'auto');

                dimmRebels.css('pointer-events', 'none');
                dimmRebels.css('opacity', '0.2');
            } else {
                dimmSlaves.css('pointer-events', 'none');
                dimmSlaves.css('opacity', '0.2');

                dimmRebels.css('opacity', '1');
                dimmRebels.css('pointer-events', 'auto');
            }
        })
    }

    $('.dimm-master input').on('change', function() {
        dimmToggle();
    });

    dimmToggle();

    /*toggle options*/
    $('.onoff').hide();

    $('.toggleoptions').each(function(){

        var options = $(this);
        var options_to_toggle = options.siblings('.options-to-toggle');

        var index = $('input:checked', options).parents('label').data('show');
        options_to_toggle.find('> .onoff').hide();
        options_to_toggle.find('.show-' + index).show(100);

        $('input', options).on('change', function() {
            var index = $(this).parents('label').data('show');
            options_to_toggle.find('> .onoff').hide();
            options_to_toggle.find('.show-' + index).show(100);
        });
        $(window).trigger('resize');
    });




    $('#auto_adjust_logo').change(function() {
        if($(this).is(':checked')) {
            $('.onoff').hide(100);
            }
            else {
                $('.onoff').show(100);
            }
    }).change();

    $('#custom-header-bg-vertical-wrap').hide;

    $('.vertical-menu-switch').change(function() {
        if($(this).is(':checked')) {
                $('#custom-header-bg-vertical-wrap').show(100);
            }
            else {
                $('#custom-header-bg-vertical-wrap').hide(100);
            }
    }).change();


    $(".anps-radio label").each(function( index ) {
        if( $("input[type=radio]").eq(index).is(':checked')) {
            $(".anps-radio label img").eq( index ).css({
                "border":"2px solid #2187c0",
                "cursor":"default"
            });
            $(".anps-radio label").eq(index).addClass('selected');
        }
    });

    var ignore = false;

    $(".anps-radio label").on("click", function(e){
        if (!ignore) {
            $('img', this).css({
                "border":"2px solid #2187c0",
                "cursor":"default"
            });

            $(this).addClass('selected');

            $(this).siblings().find('img').css(
                {
                    "border": "2px solid transparent",
                    "cursor": "pointer"
                }
            );

            $(this).siblings().removeClass('selected');
            ignore = true;
            $(this).children('input').click();
        }

        ignore = false;
    });

    //*dummy content warning*/
    $('input.dummy').on('click', function(){
        if ($(this).parents('.dummy-options').hasClass('already-imported')) {
            var reply = confirm(anps.warning_text);

            if (reply == true) {
                $(".absolute.fullscreen.importspin").addClass('visible');
                return true;
            } else {
                return false;
            }
        } else {
            $(".absolute.fullscreen.importspin").addClass('visible');
        }
    });

    setTimeout(function() {
        dimmGlobal();
    }, 100);

    //palette change active class
    $('.palette').on('click', function() {
        if ( $('.palette').hasClass('active')) {
            $('.palette').removeClass('active');
        }
        $(this).addClass('active');
    });

    /* Copy to clipboard */
    if( $('#copy-clipboard').length ) {
        var clipboard = new Clipboard('#copy-clipboard');
    }

    var optionsSH = [
        {
            option: 'anps_sticky_menu',
            options: [
                'anps_menu_sticky_height',
                'anps_sticky_menu_mobile',
                'anps_menu_sticky_mobile_height',
                'anps_sticky_bg',
                'anps_sticky_color',
                'anps_sticky_color_hover',
                'anps_sticky_color_active',
            ],
        },
        {
            option: 'anps_front_transparent_header',
            options: [
                'anps_menu_transparent_text_color',
                'anps_menu_transparent_bg_color',
                'anps_menu_transparent_text_hover_color',
                'anps_menu_transparent_topbar_color',
            ],
        },
        {
            option: 'anps_sub_transparent_header',
            options: [
                'anps_sub_text_color',
                'anps_sub_bg_color',
                'anps_sub_text_hover_color',
                'anps_sub_topbar_color',
            ],
        },
        {
            option: 'anps_menu_button',
            options: [
                'anps_menu_button_text',
                'anps_menu_button_url',
                'anps_menu_button_target',
            ],
        },
        {
            option: 'anps_menu_type',
            value: 'vertical',
            reverse: true,
            options: [
                'anps_menu_height',
                'anps_menu_mobile_height',
                'anps_header_full_width',
            ],
        },
        {
            option: 'anps_menu_type',
            value: 'top-fullwidth-menu',
            type: 'hide',
            options: [
                'anps_header_main_bg_color',
            ],
        },
        {
            option: 'anps_menu_type',
            value: 'top-fullwidth-menu',
            reverse: true,
            type: 'hide',
            options: [
                'anps_sticky_menu_mobile',
            ],
        },
    ];

    function showHideOption($group, option, value, reverse, type) {
        var isActive = $group.is(':checked');
        var $option = $('[name="' + option + '"]');
        var className = type === 'hide' ? 'anps-option-hide' : 'anps-option-disable';
        var $parent = $option.closest('[class*="col-"]');

        if ($group.attr('type') === 'radio') {
            isActive = $group.filter(':checked').val() === value;
        }

        if (reverse) {
            isActive = !isActive;
        }

        if (!isActive) {
            $parent.addClass(className);
        } else {
            $parent.removeClass(className);
        }
    }

    optionsSH.forEach(function(group) {
        var $group = $('[name="' + group.option + '"]');
        function showHideOptions() {
            var $group = $('[name="' + group.option + '"]:checked');
            group.options.forEach(function (option) {
                showHideOption($group, option, group.value, group.reverse, group.type);
            });
        }

        $group.on('change', showHideOptions);

        group.options.forEach(function (option) {
            showHideOption($group, option, group.value, group.reverse, group.type);
        });
    });
});

jQuery(function ($) {
    if (typeof ace !== 'undefined') {
        ace.config.set("basePath", anps['theme_url'] + "/anps-framework/js");
        var editor = ace.edit("editor");
        editor.getSession().setMode("ace/mode/css");

        jQuery('#anps_custom_css_wrapper').hide();

        var textarea = jQuery('#anps_custom_css');
        editor.getSession().on('change', function () {
            textarea.val(editor.getSession().getValue());
        });
    }
});
