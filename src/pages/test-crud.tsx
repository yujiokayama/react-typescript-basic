import React from "react";
import "../App.css";

import classNames from "classnames";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../stores/rootReducer";
import {
  setMemberName,
  setMemberAge,
  fetchMembers,
  registMember,
} from "../stores/modules/Member";

function TestCrud() {
  /**
   * class
   */
  const buttonClass = classNames({
    "btn-primary": true,
  });

  /**
   * valid
   */
  const isMemberValid = false;

  /**
   * redux state
   */

  const { member, newMember } = useSelector(
    (state: RootState) => state.MemberList
  );

  const dispatch = useDispatch();
  const handleRegist = async () => {
    await dispatch(registMember(newMember));
    await dispatch(fetchMembers());
  };

  /**
   * created
   */
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
            id=""
            placeholder="name"
          />
        </div>

        <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
          <input
            onChange={(e) => dispatch(setMemberAge(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name=""
            id=""
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

      <h2 className="text-3xl mb-5">READ(GET)</h2>
      {Object.values(member).map((member) => (
        <li key={member.name}>
          {member.id}
          {member.name}
          {member.age}
        </li>
      ))}
    </>
  );
}

export default TestCrud;
