import React from 'react';
import { useSelector } from 'react-redux';
import Media from 'react-bootstrap/Media';

function NewsList (){
  const news = useSelector(state => state.news);  
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
  );
}
export default NewsList;