import React from 'react';
import { Line, LineChart } from 'recharts';

const LineChartss = () => {

  const studentMarksData = [
  { id: 1, name: "Ayaan Khan", math: 72, physics: 68, chemistry: 74 },
  { id: 2, name: "Zara Rahman", math: 85, physics: 80, chemistry: 88 },
  { id: 3, name: "Rifat Hossain", math: 78, physics: 75, chemistry: 72 },
  { id: 4, name: "Nusrat Jahan", math: 90, physics: 92, chemistry: 89 },
  { id: 5, name: "Tanvir Alam", math: 68, physics: 65, chemistry: 60 },
  { id: 6, name: "Meherin Sultana", math: 94, physics: 89, chemistry: 92 },
  { id: 7, name: "Asif Mahmud", math: 81, physics: 78, chemistry: 85 },
  { id: 8, name: "Lamisa Anjum", math: 75, physics: 70, chemistry: 73 },
  { id: 9, name: "Shakib Hasan", math: 88, physics: 85, chemistry: 80 },
  { id: 10, name: "Farzana Akter", math: 66, physics: 60, chemistry: 65 },
  { id: 11, name: "Raihan Uddin", math: 79, physics: 76, chemistry: 80 },
  { id: 12, name: "Nabila Islam", math: 83, physics: 88, chemistry: 86 },
  { id: 13, name: "Hasan Rumi", math: 91, physics: 90, chemistry: 94 },
  { id: 14, name: "Sadia Chowdhury", math: 77, physics: 74, chemistry: 76 },
  { id: 15, name: "Tawsif Hamed", math: 69, physics: 72, chemistry: 71 },
  { id: 16, name: "Fahmida Noor", math: 87, physics: 90, chemistry: 89 },
  { id: 17, name: "Arif Bin Azad", math: 73, physics: 68, chemistry: 70 },
  { id: 18, name: "Raisa Tanjin", math: 82, physics: 80, chemistry: 85 },
  { id: 19, name: "Junaid Alam", math: 89, physics: 91, chemistry: 87 },
  { id: 20, name: "Tahmina Shila", math: 70, physics: 65, chemistry: 69 }
];


    return (
        <div className='px-20 '>
            <LineChart width={800} height={600} data={studentMarksData}>
             <Line dataKey="math" stroke='red'> </Line>
             <Line dataKey="physics" stroke='green'> </Line>
             <Line dataKey="chemistry" stroke='blue'> </Line>
            </LineChart>
        </div>
    );
};

export default LineChartss;