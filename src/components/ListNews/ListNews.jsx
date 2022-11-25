import React, { useEffect } from 'react'
import './ListNews.scss'
import axios from "axios"
import { useState } from 'react'
import HotNew from '../HotNew/HotNew'

const ListNews = () => {
    const [hotNews, setHotNews] = useState([])
    
    const getNews = async () => {
        try {
            const res = await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=PH42EfGc4v2GQsitL5xe0Gg60qlWFvR4")
            setHotNews(res.data.results)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
            <div>
                <h3>Read the latest world news</h3>
                <HotNew hotNews={hotNews} />
            </div>
        </>
    )
}

export default ListNews