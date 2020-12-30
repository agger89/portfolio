import React from 'react'

import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, Tooltip } from '@material-ui/core'
import { Pageview as PageviewIcon } from '@material-ui/icons'

import { data } from './data'

const CustomTooltip = withStyles({
  tooltip: {
    top: '-10px',
    padding: '6px 10px',
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 13,
    color: '#26282C',
  },
  arrow: {
    color: '#fff',
  },
})(Tooltip)

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
  paper: {
    marginBottom: 24,
    padding: '14px 20px',
    backgroundColor: '#26282C',
    border: '1px solid rgba(233, 234, 236, 0.08)',
    borderRadius: 16,
    color: '#fff',
  },
  gridBlock: {
    margin: 0,
  },
  link: {
    display: 'flex',
    width: '100%',
  },
  imageBlock: {
    display: 'flex',
    alignItems: 'center',
    width: 128,
  },
  image: {
    display: 'block',
    width: '100%',
    height: 128,
    backgroundSize: '70%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  textBlock: {
    marginLeft: 20,
  },
  companyName: {
    marginBottom: 6,
    color: '#fff',
  },
  positionName: {
    marginBottom: 10,
    color: '#fff',
  },
  work: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 14,
    fontSize: 14,
    color: '#686e78',
    '& > span': {
      display: 'block',
      marginBottom: 6,
    },
  },
  date: {
    marginRight: 20,
    fontSize: 14,
    color: '#686e78',
  },
  bottomIconBlock: {
    position: 'relative',
    width: 30,
    padding: '0 !important',
    fontSize: 0,
    '&:hover': {
      '& span': {
        display: 'block',
      },
    },
  },
  bottomIcon: {
    fontSize: 30,
    color: '#A9ABB3',
    '&:hover': {
      color: '#fff',
    },
  },
})

const Experience = () => {
  const classes = useStyles()

  console.log('data', data)
  return (
    <>
      <div className={classes.title}>Work Experience</div>
      {data.map((content, i) => (
        <Paper className={classes.paper} key={i}>
          <Grid container spacing={2} className={classes.gridBlock}>
            <CustomTooltip title="View on site" placement="top-start" arrow>
              <a
                href={content.link}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                <div className={classes.imageBlock}>
                  <span
                    className={classes.image}
                    style={{
                      backgroundImage: `url(/static/experience/${content.imageUrl})`,
                    }}
                  />
                </div>
                <Grid item xs={12} sm container className={classes.textBlock}>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="h6" className={classes.companyName}>
                        {content.name}
                      </Typography>
                      <Typography variant="body2" className={classes.positionName}>
                        {content.position}
                      </Typography>
                      <Grid item xs={12} sm container>
                        <Typography variant="body2" className={classes.work}>
                          {content.workLists.map((item, i) => (
                            <span>- {item.list}</span>
                          ))}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" className={classes.date}>
                      {content.date}
                    </Typography>
                  </Grid>
                </Grid>
              </a>
            </CustomTooltip>
          </Grid>
        </Paper>
      ))}
    </>
  )
}

export default Experience
