import React from 'react'
import PropTypes from 'prop-types'
import './Article.scss'

const Article = ({ body, children, className, title }) => {
  let classNames = `${className} Article`
  return (
    <article className={classNames}>
      <h2>{title}</h2>
      {body
        ? <p className='Article-body'>{body}</p>
        : null
      }
      {children}
    </article>
  )
}

Article.PropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  body: PropTypes.string,
  title: PropTypes.string.isRequired
}

Article.defaultProps = {
  body: '',
}

export default Article