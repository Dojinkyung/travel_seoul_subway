import React, { useEffect } from 'react'
import styles from './mapContainer.module.scss'

interface propsType {
  searchKeyword: string
}
interface placeType {
  place_name: string
  road_address_name: string
  address_name: string
  phone: string
  place_url: string
}

// head에 작성한 Kakao API 불러오기
const { kakao } = window as any

const Map = (props: propsType) => {
  const { searchKeyword } = props
  // 검색어가 바뀔 때마다 재렌더링되도록 useEffect 사용
  useEffect(() => {
    // 마커를 담는 배열
    let markers: any[] = []
    // 장소 검색 객체를 생성
    const ps = new kakao.maps.services.Places()
    const mapContainer = document.getElementById('map')
    const mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    }
    // 지도를 생성
    const map = new kakao.maps.Map(mapContainer, mapOption)

    // 키워드 검색을 요청하는 함수
    // 장소검색이 완료됐을 때 호출되는 콜백함수
    const placesSearchCB = (data: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출
        displayPlaces(data)
      }
    }
    const searchPlaces = () => {
      const keyword = searchKeyword
      const searchOption = {
        category_group_code: 'AT4,CT1,CE7,FD6',
      }
      ps.keywordSearch(keyword, placesSearchCB, searchOption)
      return true
    }
    // 키워드로 장소를 검색합니다
    searchPlaces()
    // 검색 결과 목록과 마커를 표출하는 함수
    const displayPlaces = (places: string | any[]) => {
      const listEl = document.getElementById('places-list')
      const resultEl = document.getElementById('search-result')
      const fragment = document.createDocumentFragment()
      const bounds = new kakao.maps.LatLngBounds()
      // 검색 결과 목록에 추가된 항목들을 제거
      listEl && removeAllChildNods(listEl)
      // 지도에 표시되고 있는 마커를 제거
      removeMarker()
      for (let i = 0; i < places.length; i += 1) {
        // 마커를 생성하고 지도에 표시
        const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x)
        const itemEl = getListItem(i, places[i]) // 검색 결과 항목 Element를 생성
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가
        bounds.extend(placePosition)
        fragment.appendChild(itemEl)
      }
      // 검색결과 항목들을 검색결과 목록 Element에 추가
      listEl && listEl.appendChild(fragment)
      if (resultEl) {
        resultEl.scrollTop = 0
      }
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정
      map.setBounds(bounds)
    }
    // 검색결과 항목을 Element로 반환하는 함수
    const getListItem = (index: number, places: placeType) => {
      const el = document.createElement('li')
      const itemStr = `
          <div class="info">
            <span class="marker marker_${index + 1}">
              ${index + 1}
            </span>
            <a href="${places.place_url}">
              <h5 class="info-item place-name">${places.place_name}</h5>
              ${
                places.road_address_name
                  ? `<span class="info-item road-address-name">
                    ${places.road_address_name}
                  </span>
                  <span class="info-item address-name">
                 	${places.address_name}
               	  </span>`
                  : `<span class="info-item address-name">
             	    ${places.address_name}
                  </span>`
              }
              <span class="info-item tel">
                ${places.phone}
              </span>
            </a>
          </div>
          `
      el.innerHTML = itemStr
      el.className = 'item'
      return el
    }
    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    const removeMarker = () => {
      for (let i = 0; i < markers.length; i = +1) {
        markers[i].setMap(null)
      }
      markers = []
    }
    // 검색결과 목록의 자식 Element를 제거하는 함수
    const removeAllChildNods = (el: HTMLElement) => {
      while (el.hasChildNodes()) {
        el.lastChild && el.removeChild(el.lastChild)
      }
    }
  }, [searchKeyword])

  return (
    <div className='map-container'>
      <div id='map' className={styles.map} />
      <div id='search-result'>
        <p className='result-text'>
          <span className='result-keyword'>{searchKeyword}</span>
          검색 결과
        </p>
        <div className={styles.list}>
          <ul id='places-list' className={styles.list} />
        </div>
      </div>
    </div>
  )
}

export default Map
