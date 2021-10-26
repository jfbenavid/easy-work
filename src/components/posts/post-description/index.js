import React from 'react'
import { Post } from './styles'
import proptypes from 'proptypes'

export const PostDescription = ({ title, description, url }) => {
  const handleClick = () => {
    console.log('clicked to:', url)
  }

  return (
    <Post onClick={handleClick}>
      <h3>{title}</h3>
      <span>{description}</span>
    </Post>)
}

PostDescription.propTypes = {
  title: proptypes.string.isRequired,
  description: proptypes.string.isRequired,
  url: proptypes.string.isRequired
}
