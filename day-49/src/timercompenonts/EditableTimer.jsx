import { useState } from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  runningSince,
  onTrashClick,
  onStartClick,
  onStopClick,
  onFormSubmit,
}) {
  const [editOpenForm, setEditOpenForm] = useState(false);
  function handleSubmit() {
    onFormSubmit();
    closeForm();
  }
  function handleFormClose() {
    closeForm();
  }
  function handleEditClick() {
    openForm();
  }
  function closeForm() {
    setEditOpenForm(false);
  }
  function openForm() {
    setEditOpenForm(true);
  }
  return (
    <div>
      {editOpenForm ? (
        <TimerForm
          id={id}
          title={title}
          project={project}
          onFormSubmit={handleSubmit}
          onFromClose={handleFormClose}
        />
      ) : (
        <Timer
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
          onTrashClick={onTrashClick}
          onStartClick={onStartClick}
          onStopClick={onStopClick}
          onFormSubmit={onFormSubmit}
          onEditClick={handleEditClick}
        />
      )}
    </div>
  );
}
