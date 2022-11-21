import { Article } from '../article/article-component'
import { Descreption } from '../descreption/descreption-component'
import './main-splited-component.css'

export const MainSplited = ({ descreption }: { descreption: string }): JSX.Element => {
  return (
    <main>
      <Descreption descreption={descreption} />
      <Article />
    </main>
  )
}
