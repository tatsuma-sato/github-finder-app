import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";

const UserSearch = () => {
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form className="form-control" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              value={text}
              onChange={handleChange}
              placeholder="Search"
            />
            <button
              type="submit"
              className="btn absolute top-0 right-0 rounded-l-none w-36 btn-lg"
            >
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
