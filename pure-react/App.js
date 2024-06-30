const Person = props=> {

    return React.createElement('div',{},[

    React.createElement('h1',{},props.name),
    React.createElement('p',{}, props.ocupation)
    ])
}

const App = () => {

    return React.createElement('div',{}, [
        React.createElement('h1',{class : 'tittle'},'React is render'),
        React.createElement(Person,{name:'Daniel',ocupation :'Student'},null),
        React.createElement(Person,{name:'Andrei',ocupation :'Lead'},null),
        React.createElement(Person,{name:'Emily',ocupation :'teacher'},null),
        
    ])
}
const conteiner = document.getElementById('root');
const root = ReactDOM.createRoot(conteiner);
root.render(React.createElement(App));