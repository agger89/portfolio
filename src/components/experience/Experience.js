import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'
import { data } from './data'
import { CustomTooltip } from '../Portfolio'

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
  workListBlock: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 14,
    fontSize: 14,
    color: '#686e78',
  },
  work: {
    display: 'block',
    marginBottom: 6,
  },
  date: {
    marginRight: 20,
    fontSize: 14,
    color: '#686e78',
  },
})

const Experience = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.title}>Work Experience</div>
      {data.map((content, i) => (
        <CustomTooltip title="View on site" placement="top-center" arrow>
          <Paper className={classes.paper} key={i}>
            <Grid container spacing={2} className={classes.gridBlock}>
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
                        <Typography
                          variant="body2"
                          className={classes.workListBlock}
                        >
                          {content.workLists.map((work, i) => (
                            <span className={classes.work} key={i}>
                              - {work.list}
                            </span>
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
            </Grid>
          </Paper>
        </CustomTooltip>
      ))}
    </>
  )
}

export default Experience
