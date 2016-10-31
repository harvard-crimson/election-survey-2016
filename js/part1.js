// Pie Chart: Total votes for candidates

// Four way color function  colors:  ["#6F8AB7", "#C78283","#E1EA78","#75CC79"]
// All respondents: colors: colors: ["#CACACA","#6F8AB7","#951B25"],
// [ "#6F8AB7","#A5C3E1", "#C7C7C7", "#C78283","#951B25"]

$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#chart-clinton-trump-vote').highcharts({
            credits : {enabled:false},  chart:{
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
             colors:  ["#6F8AB7", "#C78283","#E1EA78","#75CC79"],
            title: {
                text: 'The Harvard Crimson Election Survey Results'
            },
            tooltip: {
                pointFormat: ' <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Votes',
                colorByPoint: true,
                data: [{
                    name: 'Hillary Clinton- Democratic Party',
                    y: 87
                }, {
                    name: 'Donald Trump- Republican Party',
                    y: 6.0,
                }, {
                    name: 'Gary Johnson- Libertarian Party',
                    y: 5.8
                }, {
                    name: 'Jill Stein- Green Party',
                    y: 0.87
                }]
            }]
        });
    });
});

// Bar Chart: Trustworthiness
$(function () {
    $('#chart-trustworthiness').highcharts({
        credits : {enabled:false},  chart:{
            type: 'column'
        },

        title: {
            text: 'Candidate Trustworthiness'
        },
        colors: ["#CACACA","#6F8AB7","#951B25"],
        xAxis: {
            categories: [
                'Hillary Clinton',
                'Donald Trump',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Trustworthiness (%)'
            }
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'All respondents',
            data: [48,5.1]

        }, {
            name: 'Clinton Supporters',
            data: [56,2]

        }, {
            name: 'Trump Supporters',
            data: [1,52]

        }]
    });
});

// Bar Charts: Favorability
$(function () {
    $('#chart-favorability').highcharts({
        credits : {enabled:false},  chart:{
            type: 'column'
        },
        title: {
            text: 'Candidate Favorability'
        },
        colors: ["#6F8AB7","#951B25","#CACACA"],
        xAxis: {
            categories: [
            	'Barack Obama',
                'Hillary Clinton',
                'Donald Trump',
                'Tim Kaine',
                'Mike Pence'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rating (%)'
            }
        },
       tooltip: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Favorable',
            data: [86,70,3.5,46,8.3]

        }, {
            name: 'Unfavorable',
            data: [10,26,95,13,70]

        }, {
            name: 'No Opinion',
            data: [3.2,4.2,0.85,9.6,22]

        }]
    });
});


// Bar Charts: Hillary Stances
$(function () {
    $('#hillary-stances').highcharts({
        credits : {enabled:false},  chart:{
            type: 'column'
        },
        title: {
            text: 'Favorability of Hillary Clinton\'s Policy Stances'
        },
        colors: ["#6F8AB7","#951B25","#CACACA","#323232"],
        xAxis: {
            categories: [
            	'Immigration in the US',
                'Trade',
                'Relations with the Police',
                'Defeating ISIS',
                'Taxes',
                'Environment',
                'Syrian Refugees'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rating (%)'
            }
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Favorable',
            data: [72,41,60,55,62,72,66]

        }, {
            name: 'Unfavorable',
            data: [11,21,12,15,20,8.4,11]

        }, {
            name: 'No Opinion',
            data: [6.0,13,12,13,7.6,7.7,7.7]

        },{
            name: 'Not enough information',
            data: [11,25,17,17,11,12,15]
        }]
    });
});

// Bar Charts: Trump Stances
$(function () {
    $('#trump-stances').highcharts({
        credits : {enabled:false},  chart:{
            type: 'column'
        },
        title: {
            text: 'Favorability of Donald Trump\'s Policy Stances'
        },
        colors: ["#6F8AB7","#951B25","#CACACA","#323232"],
        xAxis: {
            categories: [
            	'Immigration in the US',
                'Trade',
                'Relations with the Police',
                'Defeating ISIS',
                'Taxes',
                'Environment',
                'Syrian Refugees'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rating (%)'
            }
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Favorable',
            data: [5.5,9.5,9.6,12,12,2.2,6.3]

        }, {
            name: 'Unfavorable',
            data: [91,70,74,75,77,81,86]

        }, {
            name: 'No Opinion',
            data: [1.9,7.5,6.3,5.2,3.8,5.4,3.1]

        },{
            name: 'Not enough information',
            data: [1.3,13,10,8.0,6.6,11,4.9]
        }]
    });
});

		
// Bar Chart: Hillary's Controversies
$(function () {
    $('#hillary-controversies').highcharts({
        credits : {enabled:false},  chart:{
            type: 'column'
        },
       colors: ["#CACACA","#6F8AB7","#951B25"],
        title: {
            text: 'How Clinton\'s Controversies Affected the Vote'
        },
        xAxis: {
            categories: ['Private Email Server', '2012 Benghazi Attack', 'Paid Goldman Sachs Speeches']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Less Likely to Vote for her (%)'
            }
        },
        series: [{
            name: 'All respondents',
            data: [49,34,38]
        }, {
            name: 'Clinton Supporters',
            data: [42,25,33]
        }, {
            name: 'Trump Supporters',
            data: [93,91,78]
        }]
    });
});

// Bar Chart: Trump's Controversies
$(function () {
    $('#trump-controversies').highcharts({
        credits : {enabled:false},  chart:{
            type: 'column'
        },
        tooltip: {
            enabled: false
        },
        colors: ["#CACACA","#6F8AB7","#951B25"],
        title: {
            text: 'How Trump\'s Controversies Affected the Vote'
        },
        xAxis: {
            categories: ['Comments on Muslims & Mexicans', 'Witholding Tax Returns', '2005 Leaked Audio Recording']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Less Likely to Vote for him (%)'
            }
        },
        series: [{
            name: 'All respondents',
            data: [95,83,95]
        }, {
            name: 'Clinton Supporters',
            data: [99,90,98]
        }, {
            name: 'Trump Supporters',
            data: [44,20,50]
        }]
    });
});
