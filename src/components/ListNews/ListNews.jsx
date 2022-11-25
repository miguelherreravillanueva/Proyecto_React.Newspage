import React, { useEffect } from 'react'
import './ListNews.scss'
import axios from "axios"
import { useState } from 'react'

const ListNews = () => {
    const [hotNews, setHotNews] = useState([])
    const getNews = async () => {
        try {
            const res = await axios.get("https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=6waGlV96leHne0loR2SKQPUH1fGrjAqk")
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
            <div>These are the latest world news.
                {hotNews.map((hotNew) => {

                   return(
                    <div>
                   <p>{hotNew.book_title}</p>
                   <p>{hotNew.summary}</p>
                   </div>
                   )
                })}
            </div>
        </>
    )
}

export default ListNews