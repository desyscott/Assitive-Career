import React,{useState,useEffect} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export function Charts({chartData}) {
   const {text,labels,}=chartData
   
    const options1 = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: text,
          },
        },
      };
      
      
      
      const data = {
        labels:labels,
        datasets: [
          {
            label:'No of postings',
            data:chartData.data[0].values,
            backgroundColor:chartData.backgroundColor[0].color,
          },
          {
            label: 'No of postings',
            data:chartData.data[1].values,
            backgroundColor:chartData.backgroundColor[1].color,
          },
        ],
      };
  return( <>
         <div style={{width: '550px', margin:"auto auto",}} >
         <Bar options={options1} data={data} />
         </div>
         </>)

}
