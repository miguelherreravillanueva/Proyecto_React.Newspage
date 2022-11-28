import React, { useEffect, useContext } from 'react'
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
            <div className='list'>
            <br />
                <p>These are the <strong>latest</strong>  world news</p>
                <br />
                <HotNew />
            </div>
            
        </>
    )
}

export default ListNews