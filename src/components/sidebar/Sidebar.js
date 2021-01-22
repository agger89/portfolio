import React from 'react'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'
import { ArrowForwardIos as ArrowForwardIosIcon } from '@material-ui/icons'
import clsx from 'clsx'
import { data } from './data'
import { CustomTooltip } from '../Portfolio'

const sidebarTheme = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        backgroundColor: 'transparent !important',
        '&:hover': {
          '& .MuiTab-wrapper': {
            '& svg, & span': {
              color: '#fff',
            },
          },
        },
      },
      labelIcon: {
        '& .MuiTab-wrapper': {
          '& > *:first-child': {
            marginBottom: '0px !important',
          },
        },
      },
    },
    MuiSvgIcon: {
      root: {
        color: '#A9ABB3',
      },
    },
  },
})

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
    '& > div:nth-child(2)': {
      backgroundColor: '#24282c',
    },
    '& svg': {
      transform: 'rotate(180deg)',
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
    fontSize: 14,
    color: '#686e78',
    letterSpacing: 3,
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
    backgroundColor: 'transparent !important',
    opacity: 1,
    '&:focus': {
      outline: 'none',
      backgroundColor: 'transparent',
    },
    '&:hover': {
      backgroundColor: '#373A3E !important',
      borderRadius: 8,
      transitionDuration: '0.1s',
      transitionTimingFunction: 'linear',
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
  icon: {
    width: 24,
    height: 24,
    padding: 2,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  tabLabel: {
    marginLeft: 14,
    fontSmoothing: 'antialiased',
    fontWeight: 400,
    fontSize: 14,
    color: '#a9abb3',
    letterSpacing: 0.32,
    textTransform: 'initial',
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
})

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const Sidebar = ({ tabValue, onTabValue, showTabbar, onShowTabbar, onLoader }) => {
  const classes = useStyles()

  const handleTabValueChange = (event, newValue) => {
    onLoader(true)
    onTabValue(newValue)

    setTimeout(() => {
      onLoader(false)
    }, 500)
  }

  const handleTabbarOpen = () => {
    onShowTabbar(!showTabbar)
  }

  return (
    <ThemeProvider theme={sidebarTheme}>
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
              <CustomTooltip arrow title="View source" placement="top">
                <Tab
                  className={classes.tab}
                  icon={
                    <img
                      src={`/static/skills/${item.iconUrl}`}
                      className={classes.icon}
                    />
                  }
                  label={<span className={classes.tabLabel}>{item.title}</span>}
                  {...a11yProps(i)}
                />
              </CustomTooltip>
            ))}
          </Tabs>
        </div>
        <CustomTooltip
          arrow
          title={showTabbar ? 'Close sidebar' : 'Open sidebar'}
          placement="top"
        >
          <div className={classes.sidebarTrigger} onClick={() => handleTabbarOpen()}>
            <ArrowForwardIosIcon className={classes.arrowIcon} />
          </div>
        </CustomTooltip>
      </div>
    </ThemeProvider>
  )
}

export default Sidebar
