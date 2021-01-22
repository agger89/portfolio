import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'
import { Experience } from '../experience'
import { Projects } from '../projects'
import { Skills } from '../skills'

const useStyles = makeStyles({
  tabPanelBlock: {
    width: '100%',
    height: '100%',
    padding: '56px 56px',
    backgroundColor: '#151618',
  },
})

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

const Body = ({ tabValue }) => {
  const classes = useStyles()

  return (
    <div className={classes.tabPanelBlock}>
      <TabPanel value={tabValue} index={0}>
        <Projects />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Experience />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <Skills />
      </TabPanel>
    </div>
  )
}

export default Body
