import React, { useRef, createRef } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  GitHub as GitHubIcon,
  Language as LanguageIcon,
  MoreHoriz as MoreHorizIcon,
} from '@material-ui/icons'

const useStyles = makeStyles({
  wrapper: {
    display: 'inline-block',
    width: '25%',
    padding: 10,
  },
  contentBlock: {
    position: 'relative',
    height: '100%',
    padding: '8px 0',
    backgroundColor: '#26282C',
    border: '1px solid rgba(233, 234, 236, 0.08)',
    borderRadius: 16,
    '&:hover': {
      border: '1px solid rgba(233, 234, 236, 0.16)',
    },
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 24px 12px',
    '& > div': {
      color: '#fff',
    },
  },
  name: {
    marginBottom: 4,
    color: '#A9ABB3',
  },
  description: {
    height: 44,
    marginBottom: 14,
    wordBreak: 'keep-all',
  },
  date: {
    fontSize: 13,
    color: '#686E78 !important',
  },
  imageBlock: {
    height: 158,
    margin: '0 8px',
  },
  image: {
    display: 'block',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#000',
    borderRadius: 12,
  },
  bottomBlock: {
    padding: '12px 30px 0',
  },
  linkBlock: {
    position: 'relative',
    display: 'flex',
  },
  link: {
    position: 'relative',
    display: 'inline-block',
    marginRight: 20,
    color: '#A9ABB3',
    cursor: 'pointer',
    '&:hover': {
      '& > span': {
        display: 'block',
      },
    },
  },
  linkText: {
    position: 'absolute',
    top: -36,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'none',
    padding: '4px 10px',
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 13,
    color: '#000',
    whiteSpace: 'nowrap',
    zIndex: 999,
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
  linkIcon: {
    color: '#A9ABB3',
    '&:hover': {
      color: '#fff',
    },
  },
  detailList: {
    display: 'none',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 48,
    left: 0,
    padding: '16px 24px 12px',
    backgroundColor: '#26282C',
    border: '1px solid rgba(233, 234, 236, 0.08)',
    borderRadius: 16,
    fontSize: 14,
    color: '#fff',
  },
  list: {
    marginBottom: 12,
    wordBreak: 'keep-all',
  },
})

const ProjectsView = ({ data }) => {
  const classes = useStyles()

  const detailListElement = useRef(data.map(() => createRef()))

  function setCurrentDisplay(index, style) {
    detailListElement.current[index].current.style.display = style
  }

  const handleClickDetailShow = (index) => {
    setCurrentDisplay(index, 'block')
  }

  return data.map((content, i) => (
    <div className={classes.wrapper}>
      <div className={classes.contentBlock}>
        <div className={classes.textBlock}>
          <div className={classes.name}>{content.name}</div>
          <div className={classes.description}>{content.description}</div>
          <div className={classes.date}>Created in {content.createdAt}</div>
        </div>
        <div className={classes.imageBlock}>
          <span
            className={classes.image}
            style={{
              backgroundImage: `url(/static/projects/${content.imageUrl})`,
              backgroundSize:
                content.name === '프리패스 타이머' ? 'contain' : 'cover',
              backgroundPosition:
                content.name === '프리패스 타이머' ? 'center' : 'top center',
            }}
          />
        </div>
        <div className={classes.bottomBlock}>
          <div className={classes.linkBlock}>
            <a
              className={classes.link}
              href={content.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LanguageIcon className={classes.linkIcon} />
              <span className={classes.linkText}>View on site</span>
            </a>
            {content.viewOnGithub && (
              <a
                className={classes.link}
                href={content.viewOnGithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className={classes.linkIcon} />
                <span className={classes.linkText}>View on github</span>
              </a>
            )}
            <div className={classes.link} onClick={() => handleClickDetailShow(i)}>
              <MoreHorizIcon className={classes.linkIcon} />
              <span className={classes.linkText}>Detail view</span>
            </div>
          </div>
        </div>
        <div className={classes.detailList} ref={detailListElement.current[i]}>
          {content.detailList.map((item, i) => (
            <div key={i} className={classes.list}>
              <span>- {item.list}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))
}

export default ProjectsView
