import React, { useState } from 'react'

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Tabs, Tab, Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import { reactData, recentData, htmlData } from './data'
import ProjectsView from './ProjectView'
import Loader from '../../components/Loader'

const muiTheme = createMuiTheme({
  overrides: {
    MuiBox: {
      root: {
        padding: 0,
      },
    },
    PrivateTabIndicator: {
      colorSecondary: {
        backgroundColor: 'transparent',
      },
    },
    MuiTab: {
      root: {
        backgroundColor: '#151618 !important',
        '&$selected': {
          color: '#fff',
        },
      },
      textColorInherit: {
        color: '#A9ABB3',
      },
    },
  },
})

const useStyles = makeStyles({
  title: {
    marginBottom: 28,
    borderRadius: 8,
    fontWeight: 400,
    fontSize: 14,
    color: '#A9ABB3',
    letterSpacing: 0.56,
    textTransform: 'uppercase',
  },
  filterTabBlock: {
    display: 'flex',
    marginBottom: 28,
  },
  filterTabItem: {
    padding: '6px 14px',
    borderRadius: 8,
    color: '#A9ABB3',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(233, 234, 236, 0.08) !important',
      color: '#fff',
    },
  },
  viewWrapper: {
    margin: '10px -10px -10px -10px',
  },
})

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Projects = () => {
  const classes = useStyles()
  const [showLoader, setShowLoader] = useState(false)
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setShowLoader(true)

    setValue(newValue)

    // setTimeout(() => {
    //   setShowLoader(false)
    // }, 500)
  }

  return (
    <ThemeProvider theme={muiTheme}>
      <div className={classes.title}>Projects</div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        className={classes.filterTabBlock}
      >
        <Tab label="recent" {...a11yProps(0)} className={classes.filterTabItem} />
        <Tab label="react" {...a11yProps(1)} className={classes.filterTabItem} />
        <Tab label="html" {...a11yProps(2)} className={classes.filterTabItem} />
      </Tabs>
      {/* {showLoader ? (
        <div className={classes.loaderWrap}>
          <Loader />
        </div>
      ) : ( */}
      <>
        <TabPanel value={value} index={0}>
          <div className={classes.viewWrapper}>
            <ProjectsView data={recentData} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={classes.viewWrapper}>
            <ProjectsView data={reactData} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className={classes.viewWrapper}>
            <ProjectsView data={htmlData} />
          </div>
        </TabPanel>
      </>
      {/* )} */}
    </ThemeProvider>
  )
}

export default Projects
