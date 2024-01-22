import { useState } from "react";

import Button, { SelectButton } from "./Button"
import style from '../styles/modules/app.module.scss';
import TodoModal from "./TodoModal";

const AppHeader = () => {
    const [modalOpen, setModalOpen] = useState(true)

  return (
    <div className={style.appHeader}>
        <Button variant="primary"
            onClick={() => setModalOpen(true)}
        >Add task</Button>
        <SelectButton id="status">
            <option value="all">ALL</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
        </SelectButton>
        <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}

export default AppHeader