import * as React from "react";

type EditTargetTyps = {
  name?: string | null;
  age?: string | null;
};

type Props = {
  editTarget: EditTargetTyps;
};
const EditModal: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <p>{props.editTarget.name}</p>
      <p>{props.editTarget.age}</p>
    </React.Fragment>
  );
};

export default EditModal;
