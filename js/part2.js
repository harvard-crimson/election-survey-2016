// Four way color function  colors:  ["#6F8AB7", "#C78283","#E1EA78","#75CC79"]
// All respondents: colors: colors: ["#CACACA","#6F8AB7","#951B25"],
// [ "#6F8AB7","#A5C3E1", "#C7C7C7", "#C78283","#951B25"]

// THE BASICS
// religion vs political views
// class year vs influence

// THE ISSUES
// most important issue
// opinion on issues vs. party lines

// BLUE ABOUT THE NEWS
// trust in media vs. political party
// news source vs. political leaning
// satisfaction vs. various things


// Bar chart (with negative stack): Ideological Identification by Gender
$(function () {
    // Identification categories
    var categories = ['Patriot', 'Progressive', 'Feminist', 'Capitalist', 
                      'Social Justice Activist', 'Socialist'];
    $(document).ready(function () {
        $('#chart-ideology-gender').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Ideological Identification by Gender*'
            },
            credits: {
                text: '* The data for those who selected \'Other\' was not statistically significant and is not included in this chart.',
                position: {
                    align: 'center',
                    verticalAlign: 'bottom',
                }
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) + '%';
                    }
                }
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                enabled: false
            },

            series: [{
                name: 'Male',
                data: [-38.91,  -67.15, -44.85,  -47.03, -17.70,  -15.03]
            }, {
                name: 'Female',
                data: [18.14,  63.13,  89.38,  18.85,  36.52,  12.05]
            }]
        });
    });

});