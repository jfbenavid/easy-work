import React from 'react'
import proptypes from 'proptypes'
import { PostDescription } from './post-description'
import { ListData } from './styles'

export const Posts = ({ data }) => {
  return (
    <ListData>
      {data.map((info, index) => <PostDescription key={index} {...info} />)}
    </ListData>
  )
}

Posts.propTypes = {
  data: proptypes.array
}
