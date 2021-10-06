function test() {
    alert("test succcess!");
}

$(document).ready(() => {
    addDatasetBtn()
})

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    var tmp = [];
    tmp.push([47.6149, -122.1941]);
    tmp.push([46.6149, -122.1941]);
    tmp.push([45.6149, -122.1941]);
    tmp.push([44.6149, -122.1941]);
    tmp.push([43.6149, -122.1941]);
    //Create custom Pushpin
    for (var i = 0; i < 5; ++i) {
        var center = new Microsoft.Maps.Location(tmp[i][0], tmp[i][1]);
        var pin = new Microsoft.Maps.Pushpin(center, {
            // color:purple
        });

        //Add the pushpin to the map
        map.entities.push(pin);
    }
    var bmp = [];
    bmp.push([47.6149, -123.1941]);
    bmp.push([46.6149, -123.1941]);
    bmp.push([45.6149, -123.1941]);
    bmp.push([44.6149, -123.1941]);
    bmp.push([43.6149, -123.1941]);
    //Create custom Pushpin
    for (var i = 0; i < 5; ++i) {
        var center = new Microsoft.Maps.Location(bmp[i][0], bmp[i][1]);
        var pin = new Microsoft.Maps.Pushpin(center, {
            // color:purple
        });

        //Add the pushpin to the map
        map.entities.push(pin);
    }
    var center = map.getCenter();

    //Create array of locations
    var coords = [new Microsoft.Maps.Location(47.6149, -123.1941), new Microsoft.Maps.Location(46.6149, -123.1941)];

    //Create a polyline
    var line = new Microsoft.Maps.Polyline(coords, {
        strokeColor: 'red',
        strokeThickness: 3,
        strokeDashArray: [4, 4]
    });

    //Add the polyline to map
    map.entities.push(line);


}

function addDatasetBtn(val,text) {
    for (var i = 0; i < 10; ++i) {
        var id = 'datasetoption', val = 'dataset', text = 'dataset';
        id = id + i.toString()
        text = text + i.toString()
        var select_template = `<input type="radio" class="btn-check" name="btnradio" id="${id}" autocomplete="off" value="${val}"><label class="btn btn-outline-primary" for="${id}">${text}</label>`
        console.log(select_template)
        // var vv = document.createElement('div');
        // vv.innerHTML = select_template;
        // document.getElementById("btnContainer").appendChild(vv)
        document.getElementById("btnContainer").innerHTML+=select_template
    }
}
function chooseData(){
    var tmp
    for(var i=0;i<10;++i)
    {
        if(document.getElementsByName(bthradio).checked)
            tmp=documen.getElementById()
    }
    $.ajax({
        url:'',
        type:'POST',
        dataType:'json',
        data:tmp,
        success:function (data) {
            console.log(data)

        }
    })
}

// function getLocal(){
//     $.ajax({
//         url:'',
//         typr:'GET',
//         dataType:'json',
//         success:function(datasset)
//         {
//             var data;
//             for(var i=0;i<50;++i)
//             {
//                 tmp[i]=new Microsoft.Maps.Location(datasset[i].longitude,datasset[i].latitude);
//             }
//             var line = new Microsoft.Maps.Polyline(data, {
//                 strokeColor: 'red',
//                 strokeThickness: 3,
//                 strokeDashArray: [4, 4]
//             });
//             map.entities.push(line);
//         }
//     })
//
// }
