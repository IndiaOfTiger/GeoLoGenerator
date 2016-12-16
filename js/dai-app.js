$(function () {
    var r = 0;
    var g = 0;
    var b = 0;

    $('#submit').on('click', function(){
        $('#submit').toggle(500).toggle(500);
        $('#lat').val("");
        $('#lng').val("");});

    $('.button').on('click', function() {
        $('.button').removeClass('clicked');
        $(this).toggleClass('clicked');
        $(this).push('Color-I',[255,20,20]);}); 
    

    function Color_I (data) {
        r = 3;
        g = 100;
        b = 123;
    }

    function iot_app () {
        r = 40;
        g = 40;
        b = 40;
        lum = 100;
    }

    var profile = {
        'dm_name': 'GeoLoGenerator',
        'is_sim': false,
        'df_list': [Color_I, 'GeoLo-I'],
    }

    var ida = {
        'iot_app': iot_app,
    };

    dai(profile, ida);
});
