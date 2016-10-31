$(function () {
    Highcharts.chart('vote-spectrum',{
      chart: {
        height: 130,
        backgroundColor: null,
        inverted: true,
        style: {
          fontFamily: "Source Sans Pro"
        },
        type: "column"
      },
      colors:  ["#6F8AB7", "#C78283","#E1EA78","#75CC79"].reverse(),
      credits: {
        enabled: false
      },
      legend: {
        enabled: false,
        itemHiddenStyle: {
          fontWeight: "normal"
        },
        itemHoverStyle: {
          fontWeight: "normal"
        }
      },
      series: [
        {
          name: "Hillary Clinton",
          data: [87.37]
        }, {
          name: "Donald Trump",
          data: [5.97]
        }, {
          name: "Gary Johnson",
          data: [5.79]
        }, {
          name: "Jill Stein",
          data: [0.87]
        }
      ].reverse(),
      title: {
        text: null
      },
      exporting: {
         enabled: false
}
      ,
      legend:{
      enabled:true
      },
      tooltip: {
        animation: false,
        headerFormat: ' ',
        pointFormat: "<b>{series.name}</b>: {point.y}%",
        shadow: false
      },
      plotOptions: {
        series: {
          stacking: 'normal',
         pointWidth: 25,
        }
      },
      yAxis: {
      title: {
        enabled: false
    },
      max: 100,
      lineWidth: 0,
   minorGridLineWidth: 0,
   lineColor: 'transparent',
   gridLineColor: 'transparent',
         labels: {
       enabled: false
      },
      minorTickLength: 0,
      tickLength: 0},
       xAxis: {
       title: {
        enabled: false
    },
       gridLineColor: 'transparent',
         labels: {
       enabled: false
      }}
    });
});

$(function () {
    Highcharts.chart('politics-spectrum',{
      chart: {
        height: 180,
        backgroundColor: null,
        inverted: true,
        style: {
          fontFamily: "Source Sans Pro"
        },
        type: "column"
      },
      colors: [ "#6F8AB7","#A5C3E1", "#C7C7C7", "#C78283","#951B25"].reverse(),
      credits: {
        enabled: false
      },
      legend: {
        enabled: false,
        itemHiddenStyle: {
          fontWeight: "normal"
        },
        itemHoverStyle: {
          fontWeight: "normal"
        },
        itemStyle: {
          fontWeight: "bold"
        }
      },
      series: [
        {
          name: "Very liberal",
          data: [29.30]
        }, {
          name: "Somewhat liberal",
          data: [41.76]
        }, {
          name: "Moderate",
          data: [16.38]
        }, {
          name: "Somehwat conservative",
          data: [10.00]
        },{
          name: "Very Conservative",
          data: [2.56]
        }
      ].reverse(),
      title: {
        text: null
      },
      exporting: {
         enabled: false
}
      ,
      legend:{
      enabled:true
      },
      tooltip: {
        animation: false,
        headerFormat: ' ',
        pointFormat: "<b>{series.name}</b>: {point.y}%",
        shadow: false
      },
      plotOptions: {
        series: {
          stacking: 'normal',
         pointWidth: 25,
        }
      },
      yAxis: {
      title: {
        enabled: false
    },
      max: 100,
      lineWidth: 0,
   minorGridLineWidth: 0,
   lineColor: 'transparent',
   gridLineColor: 'transparent',
         labels: {
       enabled: false
      },
      minorTickLength: 0,
      tickLength: 0},
       xAxis: {
       title: {
        enabled: false
    },
       gridLineColor: 'transparent',
         labels: {
       enabled: false
      }}
    });
});