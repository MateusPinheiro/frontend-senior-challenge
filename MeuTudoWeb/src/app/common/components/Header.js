import React, { useEffect, useRef, useState } from 'react'
import logoImage from 'assets/tudo-logo-120.png'
import { fromEvent } from 'rxjs';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [showAccountOptions, setShowAccountOptions] = useState(false)
  const location = useLocation()

  const optionsRef = useRef()

  const onClickShowOptions = event => {
    if (optionsRef.current !== null && optionsRef.current !== undefined && !optionsRef.current.contains(event.target) && showAccountOptions)
      setShowAccountOptions(false)
  }

  useEffect(() => {
    const observer = fromEvent(document, 'click').subscribe(onClickShowOptions)

    return () => {
      observer.unsubscribe()
    }
  }, [showAccountOptions])

  return (
    <div className='header'>
      <ul className='flex align-center'>
        <Link to="/">
          <img src={logoImage} className="logo-image"/>
        </Link>
        <Link to="/">
          <li className={`top-menu__item ${location.pathname === '/' ? 'top-menu__item-selected' : ''}`}>
            <i className="fas fa-home"/> Inicio
          </li>
        </Link>
        <Link to="/contracts">
          <li className={`top-menu__item ${location.pathname === '/contracts' ? 'top-menu__item-selected' : ''}`}>
            <i className="far fa-file"/> Contratos
          </li></Link>
        <Link to="/doubts">
          <li className={`top-menu__item ${location.pathname === '/doubts' ? 'top-menu__item-selected' : ''}`}>
            <i className="far fa-question-circle"/> Dúvidas
          </li>
        </Link>
      </ul>

      <div className='flex align-center'>
        <div className="top-menu__item">
          <i className="far fa-bell"/>
        </div>
        <div className="top-menu__item flex align-center" onClick={() => setShowAccountOptions(value => !value)}>
          José Carlos <i className={`fas ${showAccountOptions ? 'fa-sort-up' : 'fa-sort-down'}`}/>
        </div>
      </div>

      {showAccountOptions &&
        <div ref={optionsRef} className="top-menu__account-options">
          <div className="option-item">
            <Link to="/account">
              <i className="fas fa-user"/> Conta
            </Link>
          </div>
          <div className="option-item">
            <Link to="/">
              <i className="fas fa-sign-out-alt"/> Logout
            </Link>
          </div>
        </div>
      }
    </div>
  )
}

export default Header