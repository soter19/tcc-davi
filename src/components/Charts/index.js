import React, { useState } from 'react'
import {
  ChartWrapper,
  Chart 
} from './styled'
import { CardContent, Typography } from '@material-ui/core'
import { ResponsiveContainer, BarChart, Tooltip, Bar, XAxis, YAxis, LineChart, Line, Area, CartesianGrid, ComposedChart, Legend } from 'recharts'
import {history} from './test'



export default function Charts(props){
  const [data] = useState([
    {
      "id": "5e6a81abaf240674b9a0ba4a",
      "purchasePrice": 30320.99,
      "currentPrice": 25012.10003,
      "purchasedBtcAmount": 0.0069783,
      "currentBtcAmount": 0.0084595,
      "purchaseAmount": 211.5898,
      "sellAmount": 174.5419,
      "variation": 0.8249,
      "purchasedDate": "2020-03-12T18:38:35.574Z"
    },
    {
      "id": "5e6a821aaf24066fc7a0ba4e",
      "purchasePrice": 30999.99999,
      "currentPrice": 25012.10003,
      "purchasedBtcAmount": 0.9887218,
      "currentBtcAmount": 1.225422,
      "purchaseAmount": 30650.376699999997,
      "sellAmount": 24730.0082,
      "variation": 0.8068,
      "purchasedDate": "2020-03-12T18:40:26.247Z"
    },
    {
      "id": "5e6a8259af24063507a0ba50",
      "purchasePrice": 30799.99999,
      "currentPrice": 25012.10003,
      "purchasedBtcAmount": 0.000195,
      "currentBtcAmount": 0.0002401,
      "purchaseAmount": 6.006596100000024,
      "sellAmount": 4.8783,
      "variation": 0.8122,
      "purchasedDate": "2020-03-12T18:41:29.215Z"
    }
  ]);

  return(
    <ChartWrapper >
      <Chart variant="outlined">
        <CardContent>
          <Typography gutterBottom>
            Balance
          </Typography>
        </CardContent>
      </Chart>

      <Chart variant="outlined">
        <CardContent>
          <Typography gutterBottom>
            Price
          </Typography>
        </CardContent>
      </Chart>

      <Chart variant="outlined">
        <CardContent>
          <Typography gutterBottom>
            Volume
          </Typography>
          <Typography>
            Today, 
          </Typography>
        </CardContent>
      </Chart>

      <Chart variant="outlined">
        <CardContent>
          <Typography gutterBottom>
            History
          </Typography>

          <ResponsiveContainer width='100%' height={230}>
            <ComposedChart data={history}>
              <XAxis dataKey='createdAt'/>
              <YAxis />
              <Tooltip />
              <CartesianGrid />
              <Area type="monotone" dataKey='buy' fill="#8884d8" />
              <Area dataKey='sell' fill="#82ca9d" />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Chart>

      <Chart variant="outlined">
        <CardContent>
          <Typography gutterBottom>
            Position
          </Typography>

          <ResponsiveContainer width='100%' height={230}>
            <BarChart data={data}>
              <XAxis dataKey='purchasedDate'/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='purchasePrice' fill="#8884d8" />
              <Bar dataKey='currentPrice' fill="#82ca9d" />
              {/* <Bar dataKey='purchasedBtcAmount' fill="#F1C40F" />
              <Bar dataKey='currentBtcAmount' fill="#117A65" />
              <Bar dataKey='purchaseAmount' fill="#DC7633" />
              <Bar dataKey='sellAmount' fill="#283747" />
              <Bar dataKey='variation' fill="#8E44AD" /> */}
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Chart>      
    </ChartWrapper>
  )
}
