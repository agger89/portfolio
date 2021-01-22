import React, { useState } from 'react'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import {
  GitHub as GitHubIcon,
  Language as LanguageIcon,
  MoreHoriz as MoreHorizIcon,
} from '@material-ui/icons'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import clsx from 'clsx'
import { CustomTooltip } from '../Portfolio'

const projectTheme = createMuiTheme({
  overrides: {
    MuiToggleButton: {
      root: {
        border: 0,
        padding: 0,
        fontSize: 'initial',
        color: 'initial',
        fontFamily: 'inherit',
        fontWeight: 'initial',
        lineHeight: 'initial',
        boxSizing: 'initial',
        borderRadius: 'initial',
        letterSpacing: 'initial',
        textTransform: 'initial',
        '&$selected': {
          color: 'transparent',
          backgroundColor: 'transparent !important',
        },
        '&:focus': {
          backgroundColor: 'transparent !important',
        },
        '&:hover': {
          backgroundColor: 'transparent !important',
        },
      },
    },
  },
})

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
  },
  name: {
    marginBottom: 4,
    color: '#A9ABB3',
  },
  description: {
    height: 44,
    marginBottom: 14,
    color: '#fff',
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
    fontSize: 0,
    color: '#A9ABB3',
    cursor: 'pointer',
    '&:last-child': {
      marginRight: 0,
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
    left: 0,
    height: 300,
    padding: '16px 24px 12px',
    backgroundColor: '#26282C',
    border: '1px solid rgba(233, 234, 236, 0.08)',
    borderRadius: 16,
    fontSize: 14,
    color: '#fff',
  },
  showDetailList: {
    display: 'block',
  },
  list: {
    marginBottom: 12,
    wordBreak: 'keep-all',
  },
})

const ProjectsView = ({ data }) => {
  const classes = useStyles()
  const [toggleDetailList, setToggleDetailList] = useState(null)

  const handleToggleDetailList = (event, contentName) => {
    setToggleDetailList(contentName)
  }

  return (
    <ThemeProvider theme={projectTheme}>
      {data.map((content, i) => (
        <div className={classes.wrapper} key={i}>
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
                {content.webSiteUrl && (
                  <CustomTooltip arrow title="View on site" placement="top">
                    <a
                      className={classes.link}
                      href={content.webSiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LanguageIcon className={classes.linkIcon} />
                    </a>
                  </CustomTooltip>
                )}
                {content.githubUrl && (
                  <CustomTooltip arrow title="View on github" placement="top">
                    <a
                      className={classes.link}
                      href={content.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className={classes.linkIcon} />
                    </a>
                  </CustomTooltip>
                )}
                <CustomTooltip arrow title="View Detail" placement="top">
                  <ToggleButtonGroup
                    value={toggleDetailList}
                    exclusive
                    onChange={handleToggleDetailList}
                    className={classes.link}
                  >
                    <ToggleButton value={content.name}>
                      <MoreHorizIcon className={classes.linkIcon} />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </CustomTooltip>
              </div>
            </div>
            <div
              className={clsx(classes.detailList, {
                [classes.showDetailList]: toggleDetailList === content.name,
              })}
            >
              {content.detailList.map((item, i) => (
                <div key={i} className={classes.list}>
                  <span>- {item.list}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </ThemeProvider>
  )
}

export default ProjectsView
