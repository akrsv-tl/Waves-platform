import ApexCharts from 'apexcharts';

const options = {
  chart: {
    height: 300,
    toolbar: {
      show: false
    }
  },
  legend: {
    enabled: true,
    style: {
      fontSize: '9px',
      backgroundColor: '#353535'
    },
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
  series: [{
    name: 'rate',
    type: 'area',
    data: getGraphData(100)
  }],
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
      seriesName: 'rate'
    },
    {
      opposite: true,
      seriesName: 'rate'
    },
  ],
};

const chart = new ApexCharts(
  document.querySelector("#chart"),
  options
);

chart.render();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getGraphData(arrSize) {
  const dataArr = [];

  for(let i = 0; i < arrSize; i++) {
    dataArr.push(getRandomInt(600, 900));
  }
  return dataArr;
}