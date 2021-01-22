import React, { useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Tooltip } from '@material-ui/core'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { Body } from './body'
import Loader from './Loader'

export const CustomTooltip = withStyles({
  tooltip: {
    top: 0,
    padding: '4px 10px',
    backgroundColor: '#fff',
    borderRadius: 4,
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'italic',
    color: '#26282C',
    letterSpacing: 1,
  },
  arrow: {
    color: '#fff',
  },
})(Tooltip)

const useStyles = makeStyles({
  root: {
    backgroundColor: '#151618',
  },
})

const Portfolio = () => {
  const classes = useStyles()
  const [tabValue, setTabValue] = useState(0)
  const [showTabbar, setShowTabbar] = useState(false)
  const [loader, setLoader] = useState(false)

  return (
    <div className={classes.root}>
      <Header />
      <Sidebar
        tabValue={tabValue}
        onTabValue={setTabValue}
        showTabbar={showTabbar}
        onShowTabbar={setShowTabbar}
        onLoader={setLoader}
      />
      {loader ? <Loader /> : <Body tabValue={tabValue} />}
    </div>
  )
}

export default Portfolio
