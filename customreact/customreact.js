function customRender(reactElemet, container) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.Children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   container.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Children;
  const props = reactElement.props;
  for (const prop in props) {
    //if (prop == Children) continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
    container.appendChild(domElement);
  }
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  Children: "click me to visit google",
};

const maincontainer = document.querySelector("#root");
customRender(reactElement, maincontainer);
