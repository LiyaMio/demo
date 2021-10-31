function setRuntime(){
    var chartDom = document.getElementById('runtime');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title:{
            // left:"5%",
            text:'运行时间'
        },
        tooltip: {
            trigger: 'axis'
        },
        dataset:{
            source: [
                ['dataSize', '10000', '20000', '30000', '40000', '50000', '100000'],
                ['newA', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                ['oldA', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],

            ]
        },
        legend: {
            data: ['newA', 'oldA']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        ]
    };
    option && myChart.setOption(option);
}
function setMemory(){
    var chartDom = document.getElementById('memory');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title:{
            // left:"5%",
            text:'内存使用对比'
        },
        tooltip: {
            trigger: 'axis'
        },
        dataset:{
            source: [
                ['dataSize', '10000', '20000', '30000', '40000', '50000', '100000'],
                ['newA', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                ['oldA', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],

            ]
        },
        legend: {
            data: ['newA', 'oldA']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        ]
    };
    option && myChart.setOption(option);
}
function setVariance(){
    var chartDom = document.getElementById('variance');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title:{
            // left:"5%",
            text:'方差对比'
        },
        tooltip: {
            trigger: 'axis'
        },
        dataset:{
            source: [
                ['dataSize', '10000', '20000', '30000', '40000', '50000', '100000'],
                ['newA', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                ['oldA', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],

            ]
        },
        legend: {
            data: ['newA', 'oldA']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        ]
    };
    option && myChart.setOption(option);
}
function test1(){
    var chartDom = document.getElementById('c1');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title:{
            // left:"5%",
            text:'chart 1'
        },
        tooltip: {
            trigger: 'axis'
        },
        dataset:{
            source: [
                ['dataSize', '10000', '20000', '30000', '40000', '50000', '100000'],
                ['newA', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                ['oldA', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],

            ]
        },
        legend: {
            data: ['newA', 'oldA']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        ]
    };
    option && myChart.setOption(option);
}
function test2(){
    var chartDom = document.getElementById('c2');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title:{
            // left:"5%",
            text:'chart 2'
        },
        tooltip: {
            trigger: 'axis'
        },
        dataset:{
            source: [
                ['dataSize', '10000', '20000', '30000', '40000', '50000', '100000'],
                ['newA', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                ['oldA', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],

            ]
        },
        legend: {
            data: ['newA', 'oldA']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        ]
    };
    option && myChart.setOption(option);
}
function test3(){
    var chartDom = document.getElementById('c3');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title:{
            // left:"5%",
            text:'chart 3'
        },
        tooltip: {
            trigger: 'axis'
        },
        dataset:{
            source: [
                ['dataSize', '10000', '20000', '30000', '40000', '50000', '100000'],
                ['newA', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
                ['oldA', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],

            ]
        },
        legend: {
            data: ['newA', 'oldA']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        ]
    };
    option && myChart.setOption(option);
}