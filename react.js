let rootEle = document.querySelector("#root");
const heading = React.createElement("h1", null, "Topics Covered");
const para1 = React.createElement(
    "p",
    null,
    "The following is the list of all topics we cover in the MDN learning area."
  );
  const link1 = React.createElement(
    "a",
    { href: "  https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"},"Getting Started with the Web"
  );
    const p1=React.createElement("p",{className:"p1"},"Provides the practical introduction to the web development for the complete beginners.");

  const firstParaContainer = React.createElement("div", null, link1,p1);

    const link2=React.createElement("a",{href: "https://developer.mozilla.org/en-US/docs/Learn/HTML"},"HTML-Structuring the web")
  

  const p2 = React.createElement(
    "p",
    null,
    "HTML is the language that we use to structurethe different parts of our content and define what there meaning and purpose is.This topic teach HTML in detail."
  );
  const secondParaContainer=React.createElement("div",null,link2,p2);

  const link3=React.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS"},"CSS-Styling the web");

  const p3=React.createElement("p",null,"CSS is the language that we use to control our web content's style and layout as well as adding behaviour like animation This topic provides comprehensive coverage of CSS.");

  const thirdParaContainer=React.createElement("div",null,link3,p3);

  const mainContainer = React.createElement(
    "div",
    null,
    heading,
    firstParaContainer,
    secondParaContainer,
    thirdParaContainer
  );
  ReactDOM.render(mainContainer, rootEle);