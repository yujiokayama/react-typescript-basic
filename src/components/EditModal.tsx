import * as React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../stores/rootReducer";
import {
  setEditName,
  setEditAge,
  fetchMembers,
  editMember,
  EditTarget,
} from "../stores/modules/Member";

const EditModal = () => {
  const dispatch = useDispatch();
  const { editTarget } = useSelector((state: RootState) => {
    return state.MemberList;
  });

  /**
   * PATCH
   */
  const handleEdit = async (editContent: EditTarget): Promise<void> => {
    await dispatch(editMember(editContent));
    await dispatch(fetchMembers());
  };

  const editID: any = editTarget.id?.length;

  return (
    <>
      {editID > 0 && (
        <div>
          <dl>
            <dt>編集中のメンバー</dt>
            <dd>key:{editTarget.id}</dd>
            <dd>name:{editTarget.name}</dd>
            <dd>age:{editTarget.age}</dd>
          </dl>
          <div className="flex">
            <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={(e) => dispatch(setEditName(e.target.value))}
                value={editTarget.name}
              />
            </div>
            <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={(e) => dispatch(setEditAge(e.target.value))}
                value={editTarget.age}
              />
            </div>
            <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
              <button
                onClick={() => {
                  handleEdit({
                    id: editTarget.id,
                    name: editTarget.name,
                    age: editTarget.age,
                  });
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                更新
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;
