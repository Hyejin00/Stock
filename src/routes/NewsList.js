import React from 'react';
import Media from 'react-bootstrap/Media';

function NewsList (){
  const news = [
    {
      "category": "technology",
      "datetime": 1567054115,
      "headline": "Facebook acknowledges flaw in Messenger Kids app",
      "id": 25040,
      "image": "https://s3.reutersmedia.net/resources/r/?m=02\u0026d=20190829\u0026t=2\u0026i=1423882334\u0026w=1200\u0026r=LYNXNPEF7S07O",
      "related": "",
      "source": "Reuters",
      "summary": "Facebook Inc  acknowledged a flaw in its Messenger Kids app, weeks after two U.S. senators raised privacy concerns about the application, and said that it spoke to the U.S. Federal Trade Commission about the matter.",
      "url": "https://www.reuters.com/article/us-facebook-privacy/facebook-acknowledges-flaw-in-messenger-kids-app-idUSKCN1VJ08X"
    },
    {
      "category": "top news",
      "datetime": 1567053948,
      "headline": "Swedish teen climate activist arrives in New York by boat for U.N. summit",
      "id": 25060,
      "image": "https://s3.reutersmedia.net/resources/r/?m=02\u0026d=20190828\u0026t=2\u0026i=1423796908\u0026w=1200\u0026r=LYNXNPEF7R24P",
      "related": "",
      "source": "Reuters",
      "summary": "Teenage climate activist Greta Thunberg sailed into New York Harbor on Wednesday in a zero-carbon emissions vessel, completing her nearly 14-day journey from England to take part in a United Nations climate summit.",
      "url": "https://www.reuters.com/article/us-global-climate-thunberg/swedish-teen-climate-activist-arrives-in-new-york-by-boat-for-u-n-summit-idUSKCN1VI1F1"
    }];
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