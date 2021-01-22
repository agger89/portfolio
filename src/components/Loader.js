import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  loaderBlock: {
    position: 'fixed',
    top: ({ isProject }) => (isProject ? 285 : 56),
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#151618',
  },
  '@global': {
    '@keyframes dotPulseBefore': {
      '0%': {
        boxShadow: '9984px 0 0 -5px #686e78',
      },
      '30%': {
        boxShadow: '9984px 0 0 2px #686e78',
      },
      '60%, 100%': {
        boxShadow: '9984px 0 0 -5px #686e78',
      },
    },
    '@keyframes dotPulse': {
      '0%': {
        boxShadow: '9999px 0 0 -5px #686e78',
      },
      '30%': {
        boxShadow: '9999px 0 0 2px #686e78',
      },
      '60%, 100%': {
        boxShadow: '9999px 0 0 -5px #686e78',
      },
    },

    '@keyframes dotPulseAfter': {
      '0%': {
        boxShadow: '10014px 0 0 -5px #686e78',
      },
      '30%': {
        boxShadow: '10014px 0 0 2px #686e78',
      },
      '60%, 100%': {
        boxShadow: '10014px 0 0 -5px #686e78',
      },
    },
  },
  loaderWrap: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  loader: {
    position: 'relative',
    left: -9999,
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: '#686e78',
    color: '#686e78',
    boxShadow: '9999px 0 0 -5px #686e78',
    animation: 'dotPulse 1s infinite linear',
    animationDelay: '.15s',
    '&::before, &::after': {
      content: '""',
      display: 'inline-block',
      position: 'absolute',
      top: 0,
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: '#686e78',
      color: '#686e78',
    },
    '&::before': {
      left: '-10px',
      boxShadow: '9984px 0 0 -5px #686e78',
      animation: 'dotPulseBefore 1s infinite linear',
      animationDelay: '0s',
    },
    '&::after': {
      right: '-10px',
      boxShadow: '10014px 0 0 -5px #686e78',
      animation: 'dotPulseAfter 1s infinite linear',
      animationDelay: '.3s',
    },
  },
})

const Loader = ({ isProject }) => {
  const classes = useStyles({ isProject })
  return (
    <div className={classes.loaderBlock}>
      <div className={classes.loaderWrap}>
        <div className={classes.loader} />
      </div>
    </div>
  )
}

export default Loader
