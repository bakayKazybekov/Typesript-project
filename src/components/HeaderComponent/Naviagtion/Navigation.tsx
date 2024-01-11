import React from 'react'
import { Link } from 'react-router-dom'
import { List, Nav, ListLink, Wrapper } from './NavigationStyles'

const Navigation: React.FC = () => {
  return  (
    <Wrapper>
      <Nav>
        <List>
          <ListLink><Link to='/'>Главная</Link></ListLink>
          <ListLink><Link to='/about-us'>О нас</Link></ListLink>
          <ListLink><Link to='/contacts'>Контакты</Link></ListLink>
          <ListLink><Link to='/shop-cart'>Корзина</Link></ListLink>
        </List>
      </Nav>
    </Wrapper>
  )
}

export default Navigation