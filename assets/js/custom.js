function drawChart(physical, digital) {
    var ctx = document.getElementById('myChart').getContext('2d');
    if (window.chart != undefined) {
        window.chart.destroy()
    }
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Physical',
                borderColor: 'rgb(255, 99, 132)',
                data: [physical.jan, physical.feb, physical.mar, physical.apr, physical.may, physical.jun, physical.jul, physical.aug, physical.sep, physical.oct, physical.nov, physical.dec]
            }, {
                label: 'Digital',
                borderColor: 'blue',
                data: [digital.jan, digital.feb, digital.mar, digital.apr, digital.may, digital.jun, digital.jul, digital.aug, digital.sep, digital.oct, digital.nov, digital.dec]
            }]
        },

        // Configuration options go here
        options: {
            events: ['click']
        }
    });
}

function physical_total(physical) {
    let total = 0;
    for (i in physical) {
        total += physical[i];
    }

    return total;
}
function digital_total(digital) {
    let total = 0;
    for (i in digital) {
        total += digital[i];
    }

    return total;
}
function render_physical_data(physical) {
    for (i in physical) {
        $('.rev_physical .' + i).text(physical[i]);
    }
}

function render_digital_data(digital) {
    for (i in digital) {
        $('.rev_digital .' + i).text(digital[i]);
    }
}

function calculate_percentage(physical, digital) {
    // console.log(physical, digital)
    let physical_total_count = 0
    let digital_total_count = 0
    let final_total = 0
    let rev_physical_percentage = 0
    let rev_digital_percentage = 0

    physical_total_count = physical_total(physical)
    digital_total_count = digital_total(digital)

    final_total = physical_total_count + digital_total_count

    rev_physical_percentage = (physical_total_count * 100) / final_total
    rev_digital_percentage = (digital_total_count * 100) / final_total

    $('.rev_physical .percent').text(rev_physical_percentage.toFixed(2) + '%')
    $('.rev_digital .percent').text(rev_digital_percentage.toFixed(2) + '%')
}