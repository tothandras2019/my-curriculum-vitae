import { Article } from '../article/article-component'
import { Descreption } from '../descreption/descreption-component'
import './main-splited-component.css'

export const MainSplited = ({ descreption, backgroundColor }: { descreption: string; backgroundColor: string }): JSX.Element => {
  return (
    <main className={`main-splited ${backgroundColor}`}>
      <Descreption descreption={descreption} />
      <Article />
    </main>
  )
}
