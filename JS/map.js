
function test(){
    alert("test succcess!");
}

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    var tmp=[];
    tmp.push([47.6149, -122.1941]);
    tmp.push([46.6149, -122.1941]);
    tmp.push([45.6149, -122.1941]);
    tmp.push([44.6149, -122.1941]);
    tmp.push([43.6149, -122.1941]);
    //Create custom Pushpin
    for(var i=0;i<5;++i) {
        var center =  new Microsoft.Maps.Location(tmp[i][0],tmp[i][1]);
        var pin = new Microsoft.Maps.Pushpin(center, {
             // color:purple
        });

        //Add the pushpin to the map
        map.entities.push(pin);
    }
    var bmp=[];
    bmp.push([47.6149, -123.1941]);
    bmp.push([46.6149, -123.1941]);
    bmp.push([45.6149, -123.1941]);
    bmp.push([44.6149, -123.1941]);
    bmp.push([43.6149, -123.1941]);
    //Create custom Pushpin
    for(var i=0;i<5;++i) {
        var center =  new Microsoft.Maps.Location(bmp[i][0],bmp[i][1]);
        var pin = new Microsoft.Maps.Pushpin(center, {
            // color:purple
        });

        //Add the pushpin to the map
        map.entities.push(pin);
    }
    // var pushpins =Microsoft.Maps.TestDataGenerator.getPushpins(10, map.getBounds());
    // var layer = new Microsoft.Maps.Layer();
    // layer.add(pushpins);
    // map.layers.insert(layer);

}

