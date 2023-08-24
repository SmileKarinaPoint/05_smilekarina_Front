"use client"
import { myPointMenuData } from '@/datas/myPointMenuData';
import { eventMenuData } from '@/datas/eventMenuData';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import modulestyle from "./PageHeader.module.css"
import { MenuType } from '@/types/MenuType';

// export default function PageHeader({props} : {props :{menudata : MenuType}}) {
export default function PageHeader() {

  const path = usePathname();
  const pathname = path.split("/")[1];
  return (
    <div className={modulestyle.tab_menu_box}>
      <PageMenuUi 
        data = {
          pathname === "mypoint" ? myPointMenuData : pathname === "event" ? eventMenuData : []
        }
        pathname = {pathname}
      />
    </div>
  )
}

const PageMenuUi = ({data, pathname}:{data: MenuType[], pathname: String}) => {
  if(data.length === 0) return null;
  return (
    <ul>
    {
      data.map((menu, idx)=> (
            <li key={idx}>
              <Link href={menu.url} className= {pathname === menu.url ? `${modulestyle.tab} ${modulestyle.on}` : `${modulestyle.tab}`}>{menu.name}</Link>
            </li>
          ))
    }
    </ul>
  )
}
