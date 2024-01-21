import Button, { SelectButton } from "./Button"
import style from '../styles/modules/app.module.scss';
import TodoModal from "./TodoModal";

const AppHeader = () => {
  return (
    <div className={style.appHeader}>
        <Button variant="primary">Add task</Button>
        <SelectButton id="status">
            <option value="all">ALL</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </SelectButton>
        <TodoModal/>
    </div>
  )
}

export default AppHeader