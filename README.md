# ✨역별 맛집 검색기✨

# 🚀 배포

[![Netlify Status](https://api.netlify.com/api/v1/badges/8c963488-351b-41d4-9152-60535ac564b2/deploy-status)](https://iridescent-florentine-38b850.netlify.app/)

# 🔧 기술 스택

- Typescript
- React
- react-redux
- SCSS
- react-responsive

## 📦 폴더 구조

```sh
 📦src
 ┣ 📂assets
 ┃ ┗ 📂svgs #svg
 ┣ 📂components
 ┃ ┣ 📂Header #헤더
 ┃ ┃ ┗ 📂Dropdown #드롭다운
 ┃ ┗ 📂Main #메인부분
 ┃ ┃ ┣ 📂Map #카카오맵 api
 ┃ ┃ ┣ 📂Modal #모달
 ┃ ┃ ┣ 📂Subway # 데스크탑 버전 지하철역
 ┃ ┃ ┗ 📂SubwayMobile #모바일 버전 지하철역
 ┣ 📂data #지하철역 정보
 ┣ 📂redux #리덕스 툴킷
 ┗ 📂styles # CSS 스타일을 위한 폴더

```

# 📌 실행 방법

## 1. 설치

```
git clone https://github.com/Dojinkyung/travel_seoul_subway.git
```

```
yarn install && yarn start
```

## 2. 📸 화면
- 데스크탑
![데스크](https://user-images.githubusercontent.com/63532503/192145118-7df83e7c-284f-4133-a6d9-e90387e0a4d0.gif)
- 모바일
![모바일](https://user-images.githubusercontent.com/63532503/192145231-bba76bc7-493f-4ab3-9f5e-97622305c037.gif)

# 💡 구현 내용
서울 지하철 역 주변의 맛집 리스트를 보여주는 react 앱을 구현했습니다.

## 데이터 활용
카카오 맵 검색을 이용하여 지하철 역 주변 맛집 리스트를 보여주었습니다.
