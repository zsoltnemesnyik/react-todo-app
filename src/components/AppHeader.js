import Button, { SelectButton } from "./Button"
import style from '../styles/modules/app.module.scss';

const AppHeader = () => {
  return (
    <div className={style.appHeader}>
        <Button variant="primary">
            click me
        </Button>
        <SelectButton id="status">
            <option value="all">ALL</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </SelectButton>
    </div>
  )
}

export default AppHeader