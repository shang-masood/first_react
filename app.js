const App = () => {
  return React.createElement(
    "div",
    { className: "app-container" },
    React.createElement("h1", {}, "activity"),
    [
      {
        name: "shang masood abdulla",
        image:
          "https://image.shutterstock.com/image-vector/vector-man-profile-icon-600w-380655355.jpg",
        study: "graduated",
        hobbies: "chess"+ ","+" swimming",
      },
      {
        name: "shang masood abdulla",
        image:
          "https://image.shutterstock.com/image-vector/vector-man-profile-icon-600w-380655355.jpg",
        study: "graduated",
        hobbies: "chess " ,
      },
      {
        name: "shang masood abdulla",
        image:
          "https://image.shutterstock.com/image-vector/vector-man-profile-icon-600w-380655355.jpg",
        study: "graduated",
        hobbies: "chess " ,
      },
      {
        name: "shang masood abdulla",
        image:
          "https://image.shutterstock.com/image-vector/vector-man-profile-icon-600w-380655355.jpg",
        study: "graduated",
        hobbies: "chess " ,
      },
    ].map((prod) =>
      React.createElement(Product, {
        name: prod.name,
        image: prod.image,
        study: prod.study,
        hobbies: prod.hobbies,
      })
    )
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));