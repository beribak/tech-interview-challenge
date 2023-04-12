import example  from './example';
const cont = document.querySelector('.items-container')
let counter = 0
// 1.  
  // Get data
  // JSON located at https://gitlab.com/-/snippets/2149167/raw/main/data.json
  // fetch API

  fetch('http://localhost:8080/data.json')
  .then(response => response.json())
  .then(data => {
    data.profiles.forEach(item => {
      counter += 1
      const labels = []
      const values = []
      
      item.data.forEach(item => {
        values.push(item.value)
        labels.push(item.label)
      })

      // 2. 
      // Manipulate data
      // create a UI component for the JSON data
      // https://apexcharts.com/ for creating charts out of the data
      // create a card for each data enty in the profiles array
      //display all chart
      chart(values, labels, item.title, counter);  
    });
})

const chart = (s, l, title, counter) => {
  // 3.
  // Outpot
  // vanila JS create components and indent in page
    
  cont.insertAdjacentHTML('beforeend', `<div>
                                              <h1>${title}</h1>

                                              <div id="chart${counter}">

                                              </div>
                                          </div>`)

    var options = {
      series: s,
      chart: {
      type: 'donut',
    },
    labels: l
    };

    var chart = new ApexCharts(document.querySelector(`#chart${counter}`), options);
    chart.render();
}
