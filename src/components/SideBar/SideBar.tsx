import React from 'react'

import styles from './SideBar.module.css'
import Search from '../Search/Search'
import CitiesContainer from '../CitiesContainer/CitiesContainer'

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
        <Search />
        <CitiesContainer />
    </div>
  )
}

export default SideBar