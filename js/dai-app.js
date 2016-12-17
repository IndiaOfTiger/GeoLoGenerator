$(function () {
    var r = 0;
    var g = 0;
    var b = 0;
    var lat = 0;
    var lng = 0;

    $('#submit').on('click', function(){
        $('#submit').toggle(500).toggle(500);
        $('#lat').val("");
        $('#lng').val("");});

    $('.button').on('click', function() {
        $('.button').removeClass('clicked');
        $(this).toggleClass('clicked');
        $(this).csmapi.push('Color-I',[255,20,20]);}); 
    

    function Color_I () {
        var arr = [];
        r = 3;
        g = 100;
        b = 123;
        arr.push(r);
        arr.push(g);
        arr.push(b);
        return arr;
    }

    function GeoLo_I () {
        var arr = [];
        lat = 3;
        lng = 3;
        arr.push(lat);
        arr.push(lng);
        return arr;
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
        'df_list': [Color_I, GeoLo_I],
        'origin_df_list': [Color_I, GeoLo_I],
    }

    var ida = {
        'iot_app': iot_app,
    };

    dai(profile, ida);
});
