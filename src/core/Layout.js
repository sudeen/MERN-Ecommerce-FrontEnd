import React from 'react'
// eslint-disable-next-line
import Menu from './Menu'
import '../styles.css'

const Layout = ({ title='Title', description='Description', className, children}) => (
  <div>
      <Menu />
    <div className='jumbotron'>
      <h2>{title}</h2>
      <p className='lead'>
        {description}
      </p>
    </div>
    <div className={className}>
      {children}
    </div>
  </div>
)

export default Layout
