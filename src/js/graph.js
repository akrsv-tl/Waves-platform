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
    style: {
      fontSize: '9px',
      fontFamily: undefined
    },
    x: {
      formatter: () => '16/03'
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

const graphItems = document.querySelector('.graph__items');

graphItems.addEventListener('click', (e) => {
  if (e.target.tagName != 'LI') return;

  const btn = e.target;
  const hasClass = btn.classList.contains('graph__item--active');
  let btns = document.querySelectorAll('.graph__item');

  for (let i = 0; i < btns.length; i++) {
    if (btns[i] !== btn) {
      btns[i].classList.remove('graph__item--active');
    }
    if (!hasClass) btn.classList.add('graph__item--active');
  }

  toggleActiveClass(e, '.graph_currency', 'graph__item--active');
  setPrice('#span-with-price', btn.dataset.price);
  setCurrency('#span-with-currency', btn.dataset.currency);
  window.chart.updateSeries([
    {
      name: 'Rate',
      type: 'area',
      data: getGraphData(100) // Вот тут можно предварительно смотреть, на какой промежуток сейчас выбран
    }
  ]);
});

function toggleActiveClass(event, selectorGroup, activeClass) {
  const button = event.target;
  const hasClass = button.classList.contains(activeClass);
  let btns = document.querySelectorAll(selectorGroup);

  for (let i = 0; i < btns.length; i++) {
    if (btns[i] !== button) {
      btns[i].classList.remove(activeClass);
    }

  }
  if (!hasClass) {
    button.classList.add(activeClass);
  }
}

/* Функиця, чтобы изменять цену. Предполагаю, что цена должна быть в span элементе
 * чтобы менять только число, без изменения значка валюты или подписи. Так же я считаю, что информация
 * о цене должна находится в атрибуте data-price
 * (https://developer.mozilla.org/ru/docs/Web/Guide/HTML/Using_data_attributes)
 */
function setPrice (selector, price) {
  document.querySelector(selector).textContent = '' + price;
}

function setCurrency (selector, currency) {
  document.querySelector(selector).textContent = currency;
}

