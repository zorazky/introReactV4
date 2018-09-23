 //your code goes here
 const App = () => {
    return React.createElement("div", {},
        React.createElement("h1", {}, 'Adopt Me!')
    )
}

//this renders the app
ReactDOM.render(React.createElement(App), document.getElementById('root'))