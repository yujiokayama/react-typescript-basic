import React from "react";
import "../App.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../stores/rootReducer";
import { fetchMembers, registMember } from "../stores/modules/Fetch";

function TestCrud() {
  const { member, newMember } = useSelector(
    (state: RootState) => state.MemberList
  );

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const resultAction = await dispatch(registMember());
    return resultAction;
  };

  React.useEffect(() => {
    dispatch(fetchMembers());
  }, []);
  return (
    <>
      <h1 className="text-4xl mb-5">REST APIをCRUD操作する</h1>

      <h2 className="text-3xl mb-5">POST(CREATE)</h2>
      <p>name:{newMember.name}</p>
      <p>age:{newMember.age}</p>
      <div className="flex">
        <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name=""
            id=""
            placeholder="name"
          />
        </div>
        <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name=""
            id=""
            placeholder="age"
          />
        </div>
        <div className="flex-1 text-gray-700 text-center px-4 py-2 m-2">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            登録
          </button>
        </div>
      </div>

      <h2 className="text-3xl mb-5">READ(GET)</h2>
      {Object.values(member).map((member) => (
        <li key={member.id}>
          {member.id}
          {member.name}
          {member.age}
        </li>
      ))}
    </>
  );
}

export default TestCrud;
