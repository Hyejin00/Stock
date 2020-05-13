import React from 'react';
import { useSelector } from 'react-redux';
import Media from 'react-bootstrap/Media';

export default function CompanyNews(){
  const news = useSelector(state => state.selected_news);
  if(!news){
    return(
      <div>
        데이터를 불러올 수 없습니다..
      </div>
    );
  }
  if(news.length === 0){
    return(
      <div>최근 한 달간 소식이 없습니다..</div>
    )
  }
  return (
  <div>
    {
      news.map((news)=>(
        <a href={news.url} key={news.id}>
          <Media className='m-3'>
            <img
              width={75}
              height={75}
              className="mr-3"
              src={news.image}
              alt={news.headline}
            />
            <Media.Body>
              <h5>{news.headline/*말줄임표 달기 */}</h5>
              <p>
                {news.summary/*말줄임표 달기 */}
              </p>
            </Media.Body>
          </Media>
        </a>
      ))
    }
  </div>
  )
}