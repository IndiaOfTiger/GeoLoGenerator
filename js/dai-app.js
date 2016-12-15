$(function () {
    var r = 0;
    var g = 0;
    var b = 0;

    $('#submit').on('click', function(){
        $('#submit').toggle(1000).toggle(1000);});
    

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
        'df_list': ['Color_I'],
    }

    var ida = {
        'iot_app': iot_app,
    };

    dai(profile, ida);
});
