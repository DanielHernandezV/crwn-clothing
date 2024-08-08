
import { Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect } from 'react';

const App = () =>{
  

  const [tittle,setTittle] = useState('');
  const [searchField, setSearchField] = useState(''); // [value,setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMosters, setFilteredMosters] = useState(monsters);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {

     setMonsters((users));
    });

  }, []);

  

  const onSearchChange =(event)=>{
    
    setSearchField(event.target.value.toLowerCase());
  }
  const onTittleChange =(event)=>{
    
    setTittle(event.target.value);
  }
  
  useEffect (()=>{
  setFilteredMosters( monsters.filter((monster) => monster.name.toLowerCase().includes(searchField)) )

  },[monsters,searchField])
  


  return (
    <div className="App">
    <h1 className='app-tittle'>{tittle}</h1>
    <SearchBox 
    onChangeHandler = {onSearchChange}
     className = 'monsters-search-box' 
     placeholder='Search monsters'
     />
     <br/>
      <SearchBox 
    onChangeHandler = {onTittleChange}
     className = 'Tittle-search-box' 
     placeholder='Tttle monsters'
     />

    <CardList monsters ={filteredMosters} />

    

    
  
</div>

  );
}



/* class App extends  Component {

  constructor(){
    super();
    this.state = {
      monsters: [
      ],
      searchfield : ''
    }


  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {

      this.setState(()=>{return {monsters : users,totalmonsters : JSON.parse(JSON.stringify(users))}})
    });

        }

        onSearchChange = (event)=> {
          this.setState({searchfield: event.target.value.toLowerCase()}) 
        }
  
  render(){

   
    const {monsters,searchfield} = this.state;
    const {onSearchChange} =this;
    const filteredMosters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchfield))
    return(
    <div className="App">
        <h1 className='app-tittle'> Monsters Rolodex</h1>
        <SearchBox 
        onChangeHandler = {onSearchChange}
         className = 'monsters-search-box' 
         placeholder='Search monsters'
         />

        <CardList monsters ={filteredMosters} />

        

        
      
    </div>
    )
  }

} */

export default App;
