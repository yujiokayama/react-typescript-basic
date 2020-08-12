import * as React from 'react';
import '../App.css';

import classNames from 'classnames';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../stores/rootReducer';
import {
  setMemberName,
  setMemberAge,
  fetchMembers,
  editMember,
  registMember,
  deleteMember
} from '../stores/modules/Member';

import EditModal from '../components/EditModal';

function TestCrud() {
  /**
   * class
   */
  const buttonClass = classNames({
    'btn-primary': true
  });

  /**
   * valid
   */
  const isMemberValid = false;

  /**
   * redux
   */

  const { member, newMember } = useSelector(
    (state: RootState) => state.MemberList
  );

  const dispatch = useDispatch();

  const handleRegist = async (): Promise<void> => {
    await dispatch(registMember(newMember));
    await dispatch(fetchMembers());
    clearRegistMember();
  };

  const handleEdit = async (id: string, content: any): Promise<void> => {
    await dispatch(editMember({ id, content }));
    await dispatch(fetchMembers());
  };

  const handleDelete = async (id: string): Promise<void> => {
    await dispatch(deleteMember(id));
    await dispatch(fetchMembers());
  };

  const clearRegistMember = (): void => {
    (document.getElementById('MEMBER_NAME') as HTMLInputElement).value = '';
    (document.getElementById('MEMBER_AGE') as HTMLInputElement).value = '';
  };

  React.useEffect(() => {
    dispatch(fetchMembers());
  }, []);

  return (
    <>
      <h1 className="text-4xl mb-5">REST APIをCRUD操作する</h1>

      <h2 className="text-3xl mb-5">POST(CREATE)</h2>
      <div className="flex">
        <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
          <input
            onChange={(e) => dispatch(setMemberName(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name=""
            id="MEMBER_NAME"
            placeholder="name"
          />
        </div>

        <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
          <input
            onChange={(e) => dispatch(setMemberAge(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name=""
            id="MEMBER_AGE"
            placeholder="age"
          />
        </div>

        <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
          <button
            onClick={handleRegist}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={isMemberValid}
          >
            登録
          </button>
        </div>
      </div>
      <EditModal name="hoge" age={30} />
      <h2 className="text-3xl mb-5">READ(GET) / UPDATE(PUT) / DELETE</h2>
      <ul>
        {Object.entries(member).map((member) => (
          <li key={member[0]} className="mb-3">
            <ul className="flex">
              <li className="ml-3">name: {member[1].name}</li>
              <li className="ml-3">age: {member[1].age}</li>
              <li className="ml-3">
                <button
                  onClick={() => {
                    handleEdit(member[0], { name: 'replace', age: 999 });
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded-full"
                >
                  編集
                </button>
              </li>
              <li className="ml-3">
                <button
                  onClick={() => {
                    handleDelete(member[0]);
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white text-xs py-1 px-2 rounded-full"
                >
                  削除
                </button>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TestCrud;
