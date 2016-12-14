
// $(function() function initMap()); Doesn't Work!
$(function(){
        var r = 0;
        var g = 0;
        var b = 0;
        function iot_app(){
            r = 40;
            g = 40;
            b = 40;
        }
        var profile = {
            'dm_name': 'GeoLoGenerator',
            'df_list': ['Color-I'],
        }

         var ida = {
            'iot_app': iot_app,
        }; // How iot device receive data (format)
        dai(profile,ida);
        
});




