import React from 'react'

const HotNew = (props) => {
  const hotNew = props.hotNews.filter((hotNew) => hotNew.title !== "").map((hotNew) => {
    return (
        <div>
            <p>{hotNew.subsection}</p>
            <p>{hotNew.title}</p>
            <img src={hotNew.multimedia[1].url} alt="img" />
        </div>
    )
})
  return (
    <div>{hotNew}</div>
  )
}

export default HotNew