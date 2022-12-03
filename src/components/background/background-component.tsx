import { JsxAttribute } from 'typescript'
import './background-component.css'
export const Background = ({ clsName }: { clsName: string }): JSX.Element => {
  return <div className={`background ${clsName}`}></div>
}
