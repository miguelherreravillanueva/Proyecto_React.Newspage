import React, { useEffect, useState, useContext } from 'react'
import './ListNews.scss'
import HotNew from '../HotNew/HotNew'
import { GlobalContext } from '../../context/GlobalState'

const ListNews = () => {
    const {getNews} = useContext(GlobalContext);

    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
            <div>
                <h3>Read the latest world news</h3>
                <HotNew />
            </div>
        </>
    )
}

export default ListNews