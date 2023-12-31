"use client"
import { PointType } from '@/types/PointType';
import React, { useEffect, useState } from 'react'
import style from "./MyPoint.module.css"
import PointHistoryDetail from './PointHistoryDetail';
import { usePathname } from 'next/navigation';
import PointHistoryTotal from './PointHistoryTotal';
import { PointSortType } from './PointList';


export default function PointHistory({ token, pointquery }: { token: string, pointquery: PointSortType }) {

    const pathname = usePathname();

    const [pointListData, setPointListData] = useState<PointType[]>([] as PointType[]);
    const [aTotalPoint, setATotalPoint] = useState<number>(-1);
    const [uTotalPoint, setUTotalPoint] = useState<number>(-1);


    useEffect(() => {
        if (!token) return
        const getPointList = (async () => {
            await fetch(`https://smilekarina.duckdns.org/api/v1/point/pointList?` +
                `pointType=${pointquery.pointType}` +
                `&rangeStartDate=${pointquery.rangeStartDate}` +
                `&rangeEndDate=${pointquery.rangeEndDate}` +
                `&usedType=${pointquery.usedType}` +
                `&pointHistoryType=${pointquery.pointHistoryType}` +
                `&page=0&size=20`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then(res => res.json())
                .then(data => {
                    setPointListData(data.result.pointDetailOutList)
                    setATotalPoint(data.result.atotalPoint)
                    setUTotalPoint(data.result.utotalPoint)
                }).catch(error => console.log(error))
        })
        getPointList()


    }, [pointquery, token])


    // // 더미 데이터 테스트 
    // const [pointData, setPointData] = useState<PointType[]>();


    // useEffect(()=>{
    //     const getData = async() => {
    //         await fetch('http://localhost:9999/pointlist')
    //         .then(res => res.json())
    //         .then(data =>{
    //             setPointData(data.result.pntList)
    //             setATotalPoint(data.result.aTotalPoint)
    //             setUTotalPoint(data.result.uTotalPoint)
    //             console.log(data)
    //             console.log(session.data? session.data.user.token: null)
    //         })
    //     }
    //     getData();
    // },[])

    return (
        <div className={style.point_wrap}>
            <PointHistoryTotal aTotalPoint={aTotalPoint} uTotalPoint={uTotalPoint} />
            <ul className={style.point_history}>
                {pointListData?.length > 0 ? (
                    pointListData.map((item: PointType) => (
                        <PointHistoryDetail key={item.pointId} data={item} token={token} pointquery={pointquery} />
                    ))
                ) : (
                    <div className={style.no_result_box}>
                        <p className={style.no_txt}>
                            포인트 내역이 없습니다.
                        </p>
                    </div>
                )}
            </ul>
        </div>
    );
}