$(function () {
    var r;
    var g;
    var b;
    var _lat;
    var _lng;
    var description;

    $('#submit').on('click', function(){
        $('#submit').toggle(500).toggle(500);
        _lat = parseInt($('#lat').val());
        _lng = parseInt($('#lng').val());
        description = $('#description').val();
        console.log("lat", _lat);
        console.log("lng", _lng);
        console.log("description", description);
        $('#lat').val("");
        $('#lng').val("");
        $('#description').val("");

        if($('#red').hasClass('clicked'))
        {
            r = 255;
            g = 0;
            b = 0;
        }
        if($('#orange').hasClass('clicked'))
        {
            r = 255;
            g = 85;
            b = 17;
        }
        if($('#purple').hasClass('clicked'))
        {
            r = 102;
            g = 0;
            b = 255;
        }
        if($('#green').hasClass('clicked'))
        {
            r = 0;
            g = 255;
            b = 0;
        }
        
    });

    $('.button').on('click', function() {
        $('.button').removeClass('clicked');
        $(this).toggleClass('clicked');}) 
    

    function Color_I () {
        var arr = [];
        arr.push(r);
        arr.push(g);
        arr.push(b);
        return arr;
    }

    function GeoLo_I () {
        var arr = [];
        arr.push(_lat);
        arr.push(_lng);
        return arr;
    }

    function Description_I(){
        var arr = [];
        arr.push(description);
        return arr;
    }

    function iot_app () {
        r = 0;
        g = 0;
        b = 0;
        _lat = 23.5832340;
        _lng = 120.5825975;
    }

    var profile = {
        'dm_name': 'GeoLoGenerator',
        'is_sim': false,
        'df_list': [Color_I, GeoLo_I, Description_I],
        'origin_df_list': [Color_I, GeoLo_I, Description_I],
    }

    var ida = {
        'iot_app': iot_app,
    };

    dai(profile, ida);
});
