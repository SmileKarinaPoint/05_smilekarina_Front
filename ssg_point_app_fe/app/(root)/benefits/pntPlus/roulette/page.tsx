import Roulette from '@/components/page/mybenefits/Roulette'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="tab_menu_box">
        <ul role="tablist">
          <li role="presentation">
            <a href="/benefits/pntPlus/attend" role="tab" aria-selected="true" className="tab">출석체크
              <span className="hidden">선택됨</span>
            </a>
          </li>
          <li role="presentation">
            <a href="" role="tab" aria-selected="false" className="tab on">럭키룰렛</a>
          </li>
        </ul>
      </div>
      <Roulette />
    </div>
  )
}
