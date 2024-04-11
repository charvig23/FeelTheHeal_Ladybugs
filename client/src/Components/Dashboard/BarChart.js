import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Destroy the previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Donation applications', 'Donations made', 'Doctors approved'],
        datasets: [{
          label: 'Bar Chart',
          data: [10, 20, 30], // Static values
          backgroundColor: [
            '#64ccc5', 
            '#64ccc5', 
            '#64ccc5', 
          ],
          borderColor: [
            '#64ccc5',
            '#64ccc5',
            '#64ccc5',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)' // White color with transparency for grid lines
            },
            ticks: {
              color: 'white' // White color for y-axis labels
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)' // White color with transparency for grid lines
            },
            ticks: {
              color: 'white' // White color for x-axis labels
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white' // White color for legend labels
            }
          }
        }
      }
    });

  }, []);

  return (
    <div className='bar-chart-container'>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;
