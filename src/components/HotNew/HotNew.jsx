import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const HotNew = (props) => {
  const {hotNews} = useContext(GlobalContext)
  const hotNew = hotNews.filter((hotNew) => hotNew.title !== "").map((hotNew) => {
    return (
      <nav>
        <div key={hotNew.id}>
            <p><strong>{hotNew.subsection}</strong></p>
            <p><i>{hotNew.title}</i></p>
            <img src={hotNew.multimedia[1].url} alt="img" />
        </div>
        </nav>
    )
})
  return (
    <div>{hotNew}</div>
  )
}

export default HotNew