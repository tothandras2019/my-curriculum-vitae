import { MouseEvent, useState } from 'react'
import './scroll-button-component.css'
const ScrollerReact = require('react-scroll')
const scroller = ScrollerReact.scroller
const animateScroll = ScrollerReact.animateScroll

export const ScrollButton = ({ showScrollButton = true, maxValue = 4 }: { showScrollButton?: boolean; maxValue?: number }) => {
  const scrollOptions = { duration: 1000, smooth: 'easeOutCubic' }
  const [value, setValue] = useState(1)
  const [scrollDirection, setScrollDirection] = useState('down')

  const onScrollEvent = (event: MouseEvent<HTMLInputElement>) => {
    scrollDirection === 'down' ? onHandleScrollSection() : onHandleScrollToTop()
  }

  const onHandleScrollToTop = () => {
    animateScroll.scrollToTop()
    setScrollDirection('down')
    setValue(1)
  }

  const onHandleScrollSection = () => {
    scroller.scrollTo(`section-${value}`, scrollOptions)
    if (value >= maxValue) {
      setScrollDirection('up')
      return
    }
    setValue((prev) => prev + 1)
  }

  return <>{showScrollButton && <input type='button' className='scroll' value={scrollDirection} onClick={onScrollEvent} />}</>
}
