import React from 'react';
import { useSelector } from 'react-redux';
import { Chart } from "react-google-charts";
//timestamp 이해하기 쉽게 바꿔주는거 찾기
//툴팁 다루는 옵션 찾기
function makeChartData(chart){
  const data = [['label', 'low-high, open-close', 'opening/initial', 'closing/final','maximum']];
  for(let i = 0; i<chart.c.length; i++){
    data.push([chart.t[i],chart.l[i],chart.o[i],chart.c[i],chart.h[i]]);
  }
  return data;
}

export default function CandleChart (){
  const chart = useSelector(state => state.selected_chart);
  if(!chart){
    return <div>정보가 없습니다.</div>
  }
  
  if(chart.s ==='ok'){
    return (
      <Chart
      width={'100%'}
      height={500}
      chartType="CandlestickChart"
      loader={<div>Loading Chart</div>}
      data={makeChartData(chart)}
      options={{
        legend: 'none',
      }}
      rootProps={{ 'data-testid': '1' }}
      />);
  }else{
    return <div>정보가 없습니다.</div>
  }
}