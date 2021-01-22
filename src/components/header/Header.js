import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { data } from './data'
import { CustomTooltip } from '../Portfolio'

const useStyles = makeStyles({
  headerBlock: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    height: 56,
    padding: '0 30px',
    backgroundColor: '#151618',
    borderBottom: '1px solid #303133',
  },
  titleBlock: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    marginTop: -4,
    marginRight: 2,
    fontSize: 20,
    color: '#fff',
  },
  position: {
    color: '#8a8B8B',
    letterSpacing: -0.5,
  },
  contactBlock: {
    marginLeft: 'auto',
    fontSize: 20,
  },
  contact: {
    position: 'relative',
    display: 'inline-block',
    color: '#A8ABB3',
    marginLeft: 14,
  },
  contactIcon: {
    fontSize: 28,
  },
})

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.headerBlock}>
      <div className={classes.titleBlock}>
        <span className={classes.title}>portfolio</span>
        <span className={classes.position}>front-end</span>
      </div>
      <div className={classes.contactBlock}>
        {data.map((contact, i) => (
          <CustomTooltip arrow title={contact.text} placement="top">
            <a
              key={i}
              href={contact.link}
              className={classes.contact}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={classes.contactIcon}>{contact.icon}</span>
            </a>
          </CustomTooltip>
        ))}
      </div>
    </div>
  )
}

export default Header
