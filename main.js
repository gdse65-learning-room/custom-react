// Here I create a HTML element as a JS Object
const reactElement = {
    element: 'a',
    props: {
        href: 'https://ijse.lk',
    },
    innerHTML: 'Click here to visit IJSE'
}

function renderElement(mainContainer, reactElement) {
    // <a href='https://ijse.lk'>Click here to visit IJSE</a>
    const newDomElement = document.createElement(reactElement.element);
    newDomElement.innerHTML = reactElement.innerHTML;
    newDomElement.setAttribute('href', reactElement.props.href);


    // append our a element to the div element in the DOM
    mainContainer.append(newDomElement);
}

// Get the main div from the html file
const mainContainer = document.getElementById('root');



renderElement(mainContainer, reactElement);