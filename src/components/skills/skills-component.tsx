import './skills-component.css'
import { cvSkillsArrType, cvSkillsType } from '../../DATA/data-types'
import { CSSProperties, useEffect, useRef, useState } from 'react'

export const Skills = ({ skills }: { skills: cvSkillsArrType | null }) => {
  return (
    <div className='main-skills-container'>
      {skills?.map((skill, i) => (
        <SkillTypesContainer key={`skill-${i}`} skill={skill} />
      ))}
    </div>
  )
}

const SkillTypesContainer = ({ skill }: { skill: cvSkillsType }) => {
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
                  <Skill key={`items-${i}`} skillDetail={skillDetail} />
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

const Skill = ({ skillDetail }: { skillDetail: string }) => {
  const [indicatorPercentsMax, setIndicatorPercentsMax] = useState<number>(0)
  const [indicatorLevel, setIndicatorLevel] = useState<number>(0)
  const [skillName, setSkillName] = useState<string>('')
  const indicatorMaxLevel = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let counter = 0
    const intervalId = setInterval(() => {
      setIndicatorLevel(counter)
      counter += 3
      if (counter >= indicatorPercentsMax) {
        clearInterval(intervalId)
      }
    }, 6)
    return () => {
      clearInterval(intervalId)
    }
  }, [indicatorPercentsMax])

  useEffect(() => {
    if (!indicatorMaxLevel.current) return

    const [mySkill, percentage] = skillDetail.split('-')
    setSkillName(mySkill)

    const clientWidthElement = indicatorMaxLevel.current.clientWidth
    const percentInPicxels = clientWidthElement * (parseInt(percentage) / 100)
    setIndicatorPercentsMax(percentInPicxels)

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
