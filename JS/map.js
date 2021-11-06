function test() {
    alert("test succcess!");
}

var map;

function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    var tmp = [];
    tmp.push([47.6149, -122.1941]);
    tmp.push([46.6149, -122.1941]);
    tmp.push([45.6149, -122.1941]);
    tmp.push([44.6149, -122.1941]);
    tmp.push([43.6149, -122.1941]);
    var la = 47.6149;
    var lo = -122.1941;
    for (var i = 5; i < 200; ++i) {
        lo++;
        tmp.push([la, lo]);
    }
    //Create custom Pushpin
    for (var i = 0; i < 200; ++i) {
        var center = new Microsoft.Maps.Location(tmp[i][0], tmp[i][1]);
        var pin = new Microsoft.Maps.Pushpin(center, {
            // color:purple
        });

        //Add the pushpin to the map
        map.entities.push(pin);
    }
}

function chooseData() {
    for (var i = 1; i <= 102; ++i) {
        if (typeof ($("#test" + i + "").attr("checked")) != "undefined") {
            console.log(document.getElementById("test" + i + "").parentElement.parentElement.id);
            console.log(document.getElementById("test" + i + "").id);
            $.ajax({
                type: "POST",
                url: '/chooseData',
                data: {
                    Amenu: document.getElementById("test" + i + "").parentElement.parentElement.id,
                    Bmenu: document.getElementById("test" + i + "").id,
                },
                dataType: 'JSON',
            });
        }
    }

}

function runData() {
    var j = 0;
    var k = 0;
    var Amenu
    [];
    var Bmenu
    [];
    for (var i = 1; i <= 102; ++i) {
        if (typeof ($("#test" + i + "").attr("checked")) != "undefined") {
            console.log(document.getElementById("test" + i + "").parentElement.parentElement.id);
            console.log(document.getElementById("test" + i + "").id);
            Amenu[j++] = {Amenu: document.getElementById("test" + i + "").parentElement.parentElement.id};
            Bmenu[k++] = {Bmenu: document.getElementById("test" + i + "").id}
            console.log(Amenu);
            console.log(Bmenu)
        }
    }
    // $.ajax({
    //     type: "POST",
    //     url: '/rundata',
    //     data: {
    //         Amenu: document.getElementById("test" + i + "").parentElement.parentElement.id,
    //         Bmenu: document.getElementById("test" + i + "").id,
    //     },
    //     dataType: 'JSON',
    // });
}

function chooseAlg(e) {
    $.ajax({
        type: "POST",
        url: '/alg',
        data: {
            id: e.id,
        },
        dataType: 'JSON',
    });
}

function mapping() {
    $(document).ready(function () {
        $('.chooseData').click(function () {
            // alert("sssssss")
            $.ajax({
                type: "get",
                url: '/data',
                dataType: 'JSON',
                success: function (data) {
                    console.log(data.data)
                    for (var i = 0; i < 100; ++i) {
                        var center = new Microsoft.Maps.Location(data[i].longitude, data[i].latitude);
                        var pin = new Microsoft.Maps.Pushpin(center, {
                            // color:purple
                        });
                        console.log(center)
                        map.entities.push(pin);
                    }
                }
            });
        })
    })
}

function appendDAata() {

    for (var i = 1; i <= 100; ++i) {
        $('#normal_query').append(" <div class=\"form-check\">\n" +
            "                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"test" + i + "\" onclick=\"addChecked(this)\">\n" +
            "                            <label class=\"form-check-label\" for=\"test" + i + "\">\n" +
            "                               normal" + i + "\n" +
            "                            </label>\n" +
            "                        </div>"
        )
    }
    for (var i = 101; i <= 200; ++i) {
        var j=i-100;
        $('#SHH-Taxi_query').append(" <div class=\"form-check\">\n" +
            "                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"test" + i + "\" onclick=\"addChecked(this)\">\n" +
            "                            <label class=\"form-check-label\" for=\"test" + i + "\">\n" +
            "                               SSH&nbsp&nbsp" + j+ "\n" +
            "                            </label>\n" +
            "                        </div>"
        )
    }
    for (var i = 201; i <= 300; ++i) {
        var j=i-200;
        $('#T-drive_query').append(" <div class=\"form-check\">\n" +
            "                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"test" + i + "\" onclick=\"addChecked(this)\">\n" +
            "                            <label class=\"form-check-label\" for=\"test" + i + "\">\n" +
            "                               T-Dri&nbsp" + j + "\n" +
            "                            </label>\n" + "                        </div>"
        )
    }
    for (var i = 301; i <= 400; ++i)
    {
        var j=i-300;
        $('#uniform_query').append(" <div class=\"form-check\">\n" +
            "                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"test" + i + "\" onclick=\"addChecked(this)\">\n" +
            "                            <label class=\"form-check-label\" for=\"test" + i + "\">\n" +
            "                               uniform" + j + "\n" +
            "                            </label>\n" +
            "                        </div>"
        )
        // $('.realData').append("<button class=\"dropdown-item chooseData\">test" + i + "</button>")
    }

}

function addChecked(e) {
    if (typeof ($(e).attr("checked")) == "undefined") {
        $(e).append("checked");
        $(e).attr('checked', true);
        // alert("success");
        $.ajax({
            type: "POST",
            url: '/showdata',
            data: {
                Amenu: e.parentElement.parentElement.id,
                Bmenu: e.id,
            },
            dataType: 'JSON',
        });
    } else {
        alert("faile/d");
        $(e).attr('checked', false);
    }

}