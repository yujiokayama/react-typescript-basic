import * as React from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../stores/rootReducer';
import { setEditName, setEditAge } from '../stores/modules/Member';

const EditModal = () => {
  const dispatch = useDispatch();
  const { editTarget } = useSelector((state: RootState) => {
    return state.MemberList;
  });

  return (
    <React.Fragment>
      {editTarget.key && <div>key:{editTarget.key}</div>}
      {editTarget.name && <div>name:{editTarget.name}</div>}
      {editTarget.age && <div>age:{editTarget.age}</div>}

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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            登録
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditModal;
