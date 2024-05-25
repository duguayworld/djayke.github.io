google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

<!--*SUR 10-->
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Skill'        , 'Level'],
        ['Java'         , 40],
        ['Bash'         , 16],
        ['Core.Net C#'  , 10],
        ['SQL'          , 24],
        ['JavaScript/CSS/HTML', 6],
        ['Python'       , 5],
    ]);

    var options = {
        title: 'Skills',
        pieHole: 0.3,
        backgroundColor: '#232323',
        legendTextStyle: { color: '#e2e2e2' },
        titleTextStyle: { color: '#e2e2e2' },
        slices: {
            0: { color: '#FF5733' },
            1: { color: '#3498DB' }, // Java
            2: { color: '#F1C40F' }, // Bash
            3: { color: '#40EE2E' }, // Core Net C#
            4: { color: '#7330FF' }, // SQL
            5: { color: '#EE7711' }, // JS/CSS3/HTML5
            6: { color: '#004455' }, // Python
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}