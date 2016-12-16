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
        $(this).toggleClass('clicked');});
    

    function Color_O (data) {
        r = data[0];
        g = data[1];
        b = data[2];
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
        'df_list': [Color_O],
    }

    var ida = {
        'iot_app': iot_app,
    };

    dai(profile, ida);
});
