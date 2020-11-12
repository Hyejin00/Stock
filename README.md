# Stock

3-1 학기 고급 웹프로그래밍 중간 프로젝트인 주식 열람 사이트.

https://hyejin00.github.io/stock/#/
## 사용 기술
React, Redux, bootstrap
## 기능
![index](https://user-images.githubusercontent.com/44718809/98692572-9f60bc80-23b2-11eb-8b09-2a2028e49ee5.PNG)

여러 나라 주식 시장 리스트를 보여주고, navigation에는 index 페이지로 가는 home, 뉴스를 보여주는 news, 회사의 symbol을 입력하면 주가를 보여주는 search bar가 있다.
소스 경로: stock/src/routes/Home.js


![company_list](https://user-images.githubusercontent.com/44718809/98693329-7d1b6e80-23b3-11eb-805f-17a0d4a3a869.PNG)

여러 회사를 보여준다.
소스 경로: stock/src/routes/StockMarket.js

![stock](https://user-images.githubusercontent.com/44718809/98693386-8efd1180-23b3-11eb-8a05-ea628b37d91b.PNG)
![com_new](https://user-images.githubusercontent.com/44718809/98693410-98867980-23b3-11eb-8c3a-cdfc9aeea7b2.PNG)

회사 주가 정보와 차트, 해당 회사와 관련된 뉴스를 보여준다.
소스 경로: stock/src/routes/StockQuote.js 

![news](https://user-images.githubusercontent.com/44718809/98693428-a20fe180-23b3-11eb-9d41-5359514f7909.PNG)

여러 주제와 관련된 뉴스를 보여준다.
소스 경로: stock/src/routes/NewsList.js
