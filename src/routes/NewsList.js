import React from 'react';
import { useSelector } from 'react-redux';
import Media from 'react-bootstrap/Media';
import LinesEllipsis from 'react-lines-ellipsis';
import ErrorMessage from '../components/ErrorMessage';

function NewsList (){
  const news = useSelector(state => state.news);
  const error = useSelector(state => state.error);

  if(error){
    return <ErrorMessage />
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
                <h5>
                  <LinesEllipsis
                    text={news.headline}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                  />
                </h5>
                <p>
                  <LinesEllipsis
                    text={news.summary}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                  />
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