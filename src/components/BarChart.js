import React from 'react';
import {Bar} from 'react-chartjs-2';

import Chart from 'chart.js/auto'


export default class BarChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            labels: Object.keys(props.alignments),
            datasets: [
                {
                  label: 'Score',
                  backgroundColor: 'rgba(216, 224, 240)',
                  borderColor: 'rgba(66, 76, 94)',
                  borderWidth: 2,
                  data: Object.values(props.alignments)
                }
              ]
        }
    }


  render() {
    return (
      <div>
        <Bar
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Alignment bar chart',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            indexAxis: 'y'
          }}
        />
      </div>
    );
  }
}