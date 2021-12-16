const Product = (props) => {
    return React.createElement(
      "div",
      { className: "person" },
   
      React.createElement("img", { src: props.image }),
      React.createElement(
        "div",
        { className: "person1" },
      React.createElement("h4", {}, `name: ${props.name} ` ),
      React.createElement("h4", {}, `study: ${props.study} `),
      React.createElement("h4", {}, `hobbies: ${props.hobbies} `),
      ),
    );
  };