import React from 'react'
import styled, { css } from 'react-emotion'

import Github from './icons/github'

export default () => {
  return (
    <Footer>
      <div className={github}>
        <Github fill="#e4e4e4" width="25" style={{paddingRight: '5px'}}/>
        <a href="https://github.com/acetcom/nextepc">github.com/acetcom/<span>nextepc</span></a>
      </div>  
      <BuiltWithLove />
      <div className={contact}>
        <a href="mailto:brandon.jihoon@gmail.com">Contact Us</a>
      </div>  
    </Footer>
  )
}

const BuiltWithLove = () => (
  <Built>
    Built with <span>♥︎</span> and <span>nextepc</span> by <a href="https://github.com/acetcom">/<span>acetcom</span></a>, <a href="https://github.com/jyounggo">/<span>jyounggo</span></a>, <a href="https://github.com/brandonjlee">/<span>brandonjlee</span></a>, and <a href="https://github.com/anoveth">/<span>anoveth</span></a>
  </Built>
)

const Footer = styled('footer')`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #272121;
  height: 120px;
  padding-top:40px;
`

const Built = styled('div')`
  align-self: center;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  &, a, a:visited, a:hover {
    color: #eee;
    text-decoration: none;
  }

  span {
    font-weight: 600;
    color: #f63;
    
  }
`
const github = css`
  align-self: center;
  flex-grow: 1;
  text-align: center;

  font-size: 14px;
  align-items: center;
  display: flex;
  flex-direction: row;

  &, a, a:visited, a:hover {
    color: #eee;
    text-decoration: none;
  }

  span {
    font-weight: 600;
    color: #f63;
  }
`

const contact = css`
  align-self: center;
  flex-grow: 1;
  text-align: center;

  font-size: 14px;
  align-items: center;
  display: flex;
  flex-direction: row;

  &, a, a:visited, a:hover {
    color: #eee;
    text-decoration: none;
  }

  span {
    font-weight: 600;
    color: #f63;
  }
`
