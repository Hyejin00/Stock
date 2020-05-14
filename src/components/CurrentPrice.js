import React,{useState} from 'react';

export default function CurrentPrice({price, symbol}){
  const [current_price,setCurrentPrice]=useState(price);
  const socket = new WebSocket('wss://ws.finnhub.io?token=bqi7mrfrh5rcatj3upm0');
  socket.addEventListener('open', function (e){
    socket.send(JSON.stringify({'type':'subscribe', 'symbol': symbol}));
    console.log(e);
  });

  socket.addEventListener('message', function (event) {
    console.log(event.data);
    
    if(event.data.type === 'trade'){
      setCurrentPrice(event.data.data[0].p);
    }
  });
  return(
    <h3>
      {current_price}
    </h3>
  );
}