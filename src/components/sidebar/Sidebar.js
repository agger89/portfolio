import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'
import { ArrowForwardIos as ArrowForwardIosIcon } from '@material-ui/icons'

import clsx from 'clsx'

import { data } from './data'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#151618',
  },
  sidebarBlock: {
    display: 'block',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '264px',
    height: '100%',
    transform: 'translateX(-100%)',
    transition: 'transform .2s linear',
    willChange: 'transform',
    zIndex: 30,
  },
  showTabbar: {
    transform: 'none',
    '& .makeStyles-arrowIcon-7': {
      transform: 'rotate(180deg)',
    },
    '& .makeStyles-menuTabBarSubtitle-8': {
      left: '50%',
      '&:before': {
        left: '50%',
      },
    },
    '& .makeStyles-menuTabBar-5': {
      backgroundColor: '#24282c',
    },
  },
  tabsBlock: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingTop: 10,
    backgroundColor: '#24282c',
    borderRight: '1px solid rgba(244, 245, 246, 0.12)',
  },
  tabTitle: {
    padding: '50px 10px 10px',
    fontWeight: 700,
    fontSize: 16,
    color: '#686e78',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  tabs: {
    '& .MuiTabs-indicator': {
      background: 'none',
    },
  },
  tab: {
    width: 'auto',
    minWidth: 'initial',
    minHeight: 44,
    paddingRight: 0,
    paddingBottom: 10,
    '&:focus': {
      outline: 'none',
      backgroundColor: 'transparent',
    },
    '&:hover': {
      backgroundColor: '#373A3E',
      borderRadius: 8,
      transitionDuration: '0.1s',
      transitionTimingFunction: 'linear',
      '& .makeStyles-tabLabel-16': {
        color: '#fff',
      },
      '& .makeStyles-tabSubLabel-17': {
        display: 'block',
      },
    },
    '& .MuiTab-wrapper': {
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },
    '& .MuiSvgIcon-root': {
      margin: 0,
      marginRight: 14,
    },
  },
  tabLabelBlock: {
    position: 'relative',
  },
  tabLabel: {
    fontSmoothing: 'antialiased',
    fontSize: 14,
    fontWeight: 700,
    color: '#a9abb3',
    letterSpacing: 0.32,
  },
  tabHoverLabel: {
    position: 'absolute',
    top: -34,
    left: 54,
    display: 'none',
    padding: '6px 10px',
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 13,
    color: '#000',
    '&:before': {
      content: '""',
      display: 'inline-block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: 6,
      borderColor: '#fff transparent transparent transparent',
      position: 'absolute',
      bottom: -12,
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
  sidebarTrigger: {
    position: 'absolute',
    display: 'flex',
    top: 82,
    left: '100%',
    width: 48,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-1px',
    backgroundColor: '#151618',
    border: '1px solid rgba(244, 245, 246, 0.12)',
    borderRadius: '0 16px 16px 0',
    cursor: 'pointer',
    zIndex: 0,
    '&:hover': {
      '& .makeStyles-arrowIcon-22': {
        color: '#fff',
      },
      '& .makeStyles-menuTabBarSubtitle-23': {
        display: 'block',
      },
    },
  },
  arrowIcon: {
    color: '#a9abb3',
  },
  sidebarTriggerText: {
    position: 'absolute',
    top: -36,
    left: 61,
    transform: 'translateX(-50%)',
    display: 'none',
    padding: '6px 8px',
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 13,
    color: '#000',
    fontStyle: 'italic',
    whiteSpace: 'nowrap',
    '&:before': {
      content: '""',
      display: 'inline-block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: 6,
      borderColor: '#fff transparent transparent transparent',
      position: 'absolute',
      bottom: -11,
      left: 20,
      transform: 'translateX(-50%)',
    },
  },
})

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const Sidebar = ({
  tabValue,
  onTabValue,
  showTabbar,
  onShowTabbar,
  // onShowLoader,
}) => {
  const classes = useStyles()

  const handleTabValueChange = (event, newValue) => {
    // onShowLoader(true)
    onTabValue(newValue)

    // setTimeout(() => {
    //   setShowLoader(false)
    // }, 500)
  }

  const handleTabbarOpen = () => {
    onShowTabbar(!showTabbar)
  }

  return (
    <div
      className={clsx(classes.sidebarBlock, {
        [classes.showTabbar]: showTabbar,
      })}
    >
      <div className={classes.tabsBlock}>
        <p className={classes.tabTitle}>menu list</p>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tabValue}
          onChange={handleTabValueChange}
          className={classes.tabs}
        >
          {data.map((item, i) => (
            <Tab
              className={classes.tab}
              icon={item.icon}
              label={
                <span className={classes.tabLabelBlock}>
                  <span className={classes.tabLabel}>{item.title}</span>
                  <span className={classes.tabHoverLabel}>View Source</span>
                </span>
              }
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </div>
      <div className={classes.sidebarTrigger} onClick={() => handleTabbarOpen()}>
        <ArrowForwardIosIcon className={classes.arrowIcon} />
        <span className={classes.sidebarTriggerText}>
          {showTabbar ? 'Close sidebar' : 'Open sidebar'}
        </span>
      </div>
    </div>
  )
}

export default Sidebar
