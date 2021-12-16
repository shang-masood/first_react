const participants = [
  {
    avatar:
      "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183030?k=20&m=846183030&s=612x612&w=0&h=x_F6F8C0gFERghPBKWdiFJPUnrUoJwoPVvVUiJXV_Ck=",
    personName: "Shang Masood",
    fieldOfStudy: "graduated",
    hobbies: ["chess", "swimming"]
  },
  {
    avatar:
      "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?k=20&m=846183008&s=170667a&w=0&h=WIxZSP7aJ9jSvW3xqzDsWSI5g666kVBBgCNkABzYs68=",
    personName: "Bawer Farhad",
    fieldOfStudy: "Computer Science",
    hobbies: ["music", "gaming"]
  },
  {
    avatar:
      "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?k=20&m=846183008&s=170667a&w=0&h=WIxZSP7aJ9jSvW3xqzDsWSI5g666kVBBgCNkABzYs68=",
    personName: "Roudan Chirkoh",
    fieldOfStudy: "Front End Web Development",
    hobbies: ["coding", "music", "gaming", "reading"]
  }
];

const App = () => {
  return React.createElement(
    "div",
    { className: "participants-container" },
    React.createElement("h1", { className: "title" }, "Participants"),
    participants.map((person, index) =>
      React.createElement(Person, {
        avatar: person.avatar,
        personName: person.personName,
        fieldOfStudy: person.fieldOfStudy,
        hobbies: person.hobbies,
        key: `${person.personName}${index}`
      })
    )
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
