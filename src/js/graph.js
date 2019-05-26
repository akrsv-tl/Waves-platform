import ApexCharts from 'apexcharts';

const options = {
  chart: {
    height: 300,
    toolbar: {
      show: false
    },
    foreColor: '#777777',
    fontSize: '15px',
  },
  tooltip: {
    enabled: true,
    x: {

    }
  },
  markers: {
    size: 0,
    colors: '#2d2d2d',
    strokeColor: '#5a81ea',
    strokeWidth: 2,
    strokeOpacity: 1,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    hover: {
      size: 3,
      sizeOffset: 0
    }
  },
  fill: {
    type: 'solid',
    colors: ['rgba(90, 129, 234, 0.2)']
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 1
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      }
    },
    yaxis: {
      lines: {
        show: false,
      }
    }
  },
  series: [
    {
    name: 'Rate',
    type: 'area',
    data: getGraphData(100)
  }
  ],
  xaxis: {
    categories: ['25/02', '04/03', '11/03', '18/03'],
    tooltip: {
      enabled: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: [
    {
      seriesName: 'Rate'
    },
    {
      opposite: true,
      seriesName: 'Rate'
    },
  ],
};

window.chart = new ApexCharts(
  document.querySelector("#chart"),
  options
);

chart.render();

let graphPeriods = document.querySelector('.graph__periods');

graphPeriods.addEventListener('click', (e) => {
  const button = e.target;
  const hasClass = button.classList.contains('graph__period--active');
  let btns = document.querySelectorAll('.graph__period');

  for (let i = 0; i < btns.length; i++) {
    if (btns[i] !== button) {
      btns[i].classList.remove('graph__period--active');
    }
    if (button.tagName != 'LI') return;
  }
  if (!hasClass) button.classList.add('graph__period--active');

  if (button.id === 'day') {
    chart.updateSeries(
      [{
        name: 'Rate',
        type: 'area',
        data: getGraphData(15)
      }]
    );
  } else if (button.id === 'week') {
    chart.updateSeries(
      [{
        name: 'Rate',
        type: 'area',
        data: getGraphData(105)
      }]
    );
  } else if (button.id === 'month') {
    chart.updateSeries(
      [{
        name: 'Rate',
        type: 'area',
        data: getGraphData(450)
      }]
    );
  }
});


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getGraphData(arrSize) {
  const dataArr = [];

  for(let i = 0; i < arrSize; i++) {
    dataArr.push(getRandomInt(200, 900));
  }
  return dataArr;
}

