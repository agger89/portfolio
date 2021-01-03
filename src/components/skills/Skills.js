import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { data } from './data'

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
  subtitle: {
    marginBottom: 8,
    fontSize: 16,
    color: '#fff',
  },
  paper: {
    display: 'flex',
    marginBottom: 24,
    padding: '10px 20px',
    backgroundColor: '#26282C',
    border: '1px solid rgba(233, 234, 236, 0.08)',
    borderRadius: 16,
    color: '#fff',
  },
  itemBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 50,
  },
  imageBlock: {
    display: 'flex',
    alignItems: 'center',
    width: 74,
  },
  image: {
    display: 'block',
    width: '100%',
    height: 74,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: 12,
  },
  name: {
    display: 'block',
    marginTop: 8,
    fontSize: 14,
    color: '#A9ABB3',
    textAlign: 'center',
  },
})

const Skills = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.title}>Skills</div>
      {data.map((skill, i) => (
        <>
          <div className={classes.subtitle}>{skill.title}</div>
          <Paper className={classes.paper} key={i}>
            {skill.list.map((item, i) => (
              <div className={classes.itemBlock} key={i}>
                <div className={classes.imageBlock}>
                  <span
                    className={classes.image}
                    style={{
                      backgroundImage: `url(/static/skills/${item.imageUrl})`,
                    }}
                  />
                </div>
                <span className={classes.name}>{item.name}</span>
              </div>
            ))}
          </Paper>
        </>
      ))}
    </>
  )
}

export default Skills
