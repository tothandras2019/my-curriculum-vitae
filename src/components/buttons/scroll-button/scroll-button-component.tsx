import { MouseEvent } from 'react'
import { animateScroll } from 'react-scroll'
import './scroll-button-component.css'

export const ScrollButton = ({ value = 'down' }: { value?: string }) => {
  const scrollOptions = { duration: 1000, smooth: 'easeOutCubic' }

  const onScrollEvent = (event: MouseEvent<HTMLInputElement>) => {
    value === 'down' ? onHandleScrollMore() : onHandleScrollToTop()
  }

  const onHandleScrollToTop = () => {
    animateScroll.scrollToTop()
  }

  // const onHandleScrollToSection = () => {
  //   animateScroll.scrollTo(800)
  // }

  const onHandleScrollMore = () => {
    animateScroll.scrollMore(950, scrollOptions)
  }

  return <input type='button' className='scroll' value={value} onClick={onScrollEvent} />
}
