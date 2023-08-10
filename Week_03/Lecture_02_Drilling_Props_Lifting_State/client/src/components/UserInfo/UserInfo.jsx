import "./UserInfo.css";

function UserInfo({ firstName, lastName, coursesTaken }) {
  return (
    <ul className="user-card">
      <li>First Name: {firstName}</li>
      <li>Last Name: {lastName}</li>
      <li>Courses: {coursesTaken}</li>
    </ul>
  );
}

export default UserInfo;
