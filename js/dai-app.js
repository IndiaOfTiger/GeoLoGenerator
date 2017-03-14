$(function () {
    var r;
    var g;
    var b;
    var markers = [];
    var _lat;
    var _lng;
    var EQ_1;
    var EQ_2;
    var description;
    var interval = 1000; // 1000ms = 1sec
    var output = {lat: 0, lng: 0};
    var latDom = $('#Ilat > span');
    var markersDom = $('#markers_added > span');
    var lngDom = $('#Ilng > span');
    $('#eq_send').on('click', function(){
        $('#eq_send').toggle(500).toggle(500);
        console.log("Eq1", EQ_1);
        console.log("Eq2", EQ_2);
    });
    $('#submit').on('click', function(){
        $('#submit').toggle(500).toggle(500);
        var temp_lat = _lat;
        var temp_lng = _lng;
        _lat = parseInt($('#lat').val()); // -16, 54
        if(_lat < -16 || _lat > 54 || !parseInt($('#lat').val()))
        {
            alert("Invalid input!");
            $('#lat').val("");
            _lat = temp_lat;
            _lng = temp_lng;
            return false;
        }
        _lng = parseInt($('#lng').val()); // 61, 179
        if(_lng < 61 || _lng > 179 || !parseInt($('#lng').val()))
        {
            alert("Invalid input!");
            $('#lng').val("");
            _lng = temp_lng;
            _lat = temp_lat;
            return false;
        }
        if(!$('#description').val())
        {
            alert("Invalid input!");
            return false;
        }
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

        var string;
        var s_lat = _lat;
        var s_lng = _lng;
        string = '('  + s_lat + ',' + s_lng + ')' + '\n';
        //markersDom.append(document.createTextNode(string));
        var index = markers.length;
        $(markersDom).append('<button class=".btn-default equivalence" value = "'+index+'">'+string+'</button>');
        markers.push(index);

    });

    $('.button').on('click', function() {
        $('.button').removeClass('clicked');
        $(this).toggleClass('clicked');}) 
    
    $(document).on('click', '.equivalence', function(){
        if($('.eq_clicked').length < 2)
        {
            if($('.eq_clicked').length == 0)
                EQ_1 = $(this).val();
            else 
                EQ_2 = $(this).val();
            $(this).toggleClass('eq_clicked');
            //if(!$("[class=eq_clicked][value=EQ_1]").hasClass('.eq_clicked'))
            //    EQ_1 = EQ_2;
            // case 0 1 2
            // choose 0 then 2
            // delete 0 pick 1
            // send 0 , 1 ( should send 2 , 1)
        }
        else
            $(this).removeClass('eq_clicked');
    });

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

    function EQ_I(){
        var arr = [];
        arr.push(EQ_1);
        arr.push(EQ_2);
        return arr;
    }

    function DogData_I(){
        var jsonArr = [];
        jsonArr.push({R: r, G: g, B: b, lat: _lat, lng: _lng, description: description, EQ1: EQ_1, EQ2: EQ_2});
        return jsonArr;
    }

    function iot_app () {
        r = 0;
        g = 0;
        b = 0;
        _lat = 0;
        _lng = 0;
    }

    function iotUpdater() {
        //console.log(kk);
        if( navigator.geolocation )
        {
            navigator.geolocation.getCurrentPosition(showPosition);
            //deleteMarkers();
            i = 0;
            //succesiveMarker();
        }
    
        //if( window.d_name )
        //  IoTtalk.update(mac, 'Geolocation', [output.lat, output.lng]);
        // Don't Understand
        setTimeout(iotUpdater, interval);
        //requestAnimationFrame(domUpdater);

    }

    function showPosition(position) {
        output.lat = position.coords.latitude;
        output.lng = position.coords.longitude;
    }

    var profile = {
        'dm_name': 'GeoLoGenerator',
        'is_sim': false,
        'df_list': [Color_I, GeoLo_I, Description_I, EQ_I, DogData_I],
        'origin_df_list': [Color_I, GeoLo_I, Description_I, EQ_I, DogData_I],
    }

    var ida = {
        'iot_app': iot_app,
    };

    dai(profile, ida);

});
