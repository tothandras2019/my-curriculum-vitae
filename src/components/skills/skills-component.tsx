import './skills-component.css'
import { cvSkillsArrType, cvSkillsType } from '../../DATA/data-types'
import { CSSProperties, MutableRefObject, RefObject, useCallback, useEffect, useRef, useState } from 'react'

export const Skills = ({ skills }: { skills: cvSkillsArrType | null }) => {
  const skillComponentRef = useRef<HTMLDivElement | null>(null)
  const [startIndicator, setStartIndicator] = useState(false)

  const tresholds = {
    observeEntryTreshold: 0.4,
    observeLeaveTreshold: 0.2,
  }

  const intersectionCallback = useCallback((val: boolean) => {
    setStartIndicator(val)
  }, [])

  useEffect(() => {
    if (!skillComponentRef.current) return
    const observer = new IntersectionObserver(observerCallBack, { threshold: tresholds.observeEntryTreshold, root: null, rootMargin: '0%' })
    observer.observe(skillComponentRef.current)
    return () => {
      if (!skillComponentRef.current) return
      observer.unobserve(skillComponentRef.current)
    }
  }, [])

  const observerCallBack = (entries: any, observer: any) => {
    const [entriesPoperties] = entries
    if (entriesPoperties.intersectionRatio >= tresholds.observeEntryTreshold) return intersectionCallback(true)
    intersectionCallback(false)
  }

  return (
    <div ref={skillComponentRef} className='main-skills-container'>
      {skills?.map((skill, i) => (
        <SkillTypesContainer key={`skill-${i}`} startIndicator={startIndicator} skill={skill} />
      ))}
    </div>
  )
}

const SkillTypesContainer = ({ skill, startIndicator }: { skill: cvSkillsType; startIndicator: boolean }) => {
  const { type, level, other } = skill
  const otherArray = other?.split(',')

  return (
    <div className='skill-types-container'>
      <h2>{type}</h2>
      <div className='skills-container'>
        {Object.entries(level).map(([key, item], i) => {
          const itemsArray: string[] = item.split(',')
          return (
            itemsArray[0] !== '' && (
              <div key={`items-${i}`} className='skill-type'>
                <h3>{key}</h3>
                {itemsArray.map((skillDetail, i) => (
                  <Skill key={`items-${i}`} startIndicator={startIndicator} skillDetail={skillDetail} />
                ))}
              </div>
            )
          )
        })}
      </div>

      {other !== '' && (
        <div>
          {otherArray?.map((otherItem) => (
            <h5 key={`other-${otherItem}`}>{otherItem}</h5>
          ))}
        </div>
      )}
    </div>
  )
}

const Skill = ({ skillDetail, startIndicator }: { skillDetail: string; startIndicator: boolean }) => {
  const [indicatorPercentsMax, setIndicatorPercentsMax] = useState<number>(0)
  const [indicatorLevel, setIndicatorLevel] = useState<number>(0)
  const [skillName, setSkillName] = useState<string>('')
  const indicatorMaxLevel = useRef<HTMLSpanElement | null>(null)
  const timer: number = 6

  useEffect(() => {
    let intervalId: NodeJS.Timer

    if (startIndicator) {
      let counter = 0
      intervalId = setInterval(() => {
        setIndicatorLevel(counter)
        counter += 3
        if (counter >= indicatorPercentsMax) {
          clearInterval(intervalId)
        }
      }, timer)
    } else {
      let counter = 0
      setIndicatorLevel(counter)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [startIndicator])

  useEffect(() => {
    const [mySkill, percentage] = skillDetail.split('-')
    setSkillName(mySkill)

    if (indicatorMaxLevel.current) {
      const clientWidthElement = indicatorMaxLevel.current.clientWidth
      const percentInPicxels = clientWidthElement * (parseInt(percentage) / 100)
      setIndicatorPercentsMax(percentInPicxels)
    }

    return () => {}
  }, [])

  const IndicatorStyle: CSSProperties = {
    width: `${indicatorLevel}px`,
  }
  return (
    <div className='skill'>
      <h5>{skillName}</h5>
      <span className={`level-indicator`} style={IndicatorStyle}></span>
      <span ref={indicatorMaxLevel} className={`level-indicator-background`}></span>
    </div>
  )
}
