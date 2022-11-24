import './section-button-component.css'
export const SectionButton = ({ onHandleShowDescription }: { onHandleShowDescription: () => void }): JSX.Element => {
  return <input type='button' value='show more' onClick={onHandleShowDescription} />
}
