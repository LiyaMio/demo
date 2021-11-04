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
    var la=47.6149;
    var lo=-122.1941;
    for(var i=5;i<200;++i)
    {
        lo++;
        tmp.push([la,lo]);
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
    for(var i=1;i<=102;++i)
    {
        if(typeof($("#test" + i + "").attr("checked"))!="undefined")
        {
            console.log(document.getElementById("test"+ i +"").parentElement.parentElement.id);
            console.log(document.getElementById("test"+ i +"").id);
            // $.ajax({
            //     type:"POST",
            //     url:"/chooseData",
            //     data:{
            //         A menu:document.getElementById("test"+ i +"").parentElement.parentElement.id),
            //         B menu:document.getElementById("test"+ i +"").id,
            //     },
            //     dataType:'JSON',
            // });
            $.ajax({
                type:"POST",
                url:'/chooseData',
                data:{
                    Amenu:document.getElementById("test"+ i +"").parentElement.parentElement.id,
                    Bmenu:document.getElementById("test"+ i +"").id,
                },
                dataType:'JSON',
            });
        }
    }

}
function chooseAlg(e) {
    $.ajax({
        type:"POST",
        url:'/alg',
        data:{
            id:e.id,
        },
        dataType:'JSON',
    });
}
function mapping() {
    $(document).ready(function (){
        $('.chooseData').click(function (){
            // alert("sssssss")
            $.ajax({
                type:"get",
                url:'/data',
                dataType:'JSON',
                success:function (data){
                    console.log(data.data)
                    for(var i=0;i<100;++i)
                    {
                        var center = new Microsoft.Maps.Location(data[i].longitude,data[i].latitude);
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

    for(var i=1;i<=100;++i)
    {
        $('#realData1').append(" <div class=\"form-check\">\n" +
            "                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"test" + i + "\">\n" +
            "                            <label class=\"form-check-label\" for=\"test" + i + "\">\n" +
            "                               test" + i + "\n" +
            "                            </label>\n" +
            "                        </div>"
        )
        $('#realData2').append(" <div class=\"form-check\">\n" +
            "                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"test" + i + "\">\n" +
            "                            <label class=\"form-check-label\" for=\"test" + i + "\">\n" +
            "                               test" + i + "\n" +
            "                            </label>\n" +
            "                        </div>"
        )
        $('#realData3').append(" <div class=\"form-check\">\n" +
            "                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"test" + i + "\">\n" +
            "                            <label class=\"form-check-label\" for=\"test" + i + "\">\n" +
            "                               test" + i + "\n" +
            "                            </label>\n" + "                        </div>"
        )
        $('#realData4').append(" <div class=\"form-check\">\n" +
            "                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"test" + i + "\">\n" +
            "                            <label class=\"form-check-label\" for=\"test" + i + "\">\n" +
            "                               test" + i + "\n" +
            "                            </label>\n" +
            "                        </div>"
        )
        // $('.realData').append("<button class=\"dropdown-item chooseData\">test" + i + "</button>")
    }

}
