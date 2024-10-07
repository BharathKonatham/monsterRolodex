import './App.css';
import SearchBox from './components/search-box/search-nox.component';
import CardList from './components/card-list/card-list.component';
import { useState ,useEffect} from 'react';

const App = ()=>{

  const [searchString,setSearchString] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filterMonsters,setFilterMonsters] = useState(monsters)
  const [title,setTitle] = useState('')
  
  console.log('render')
  const onSearchChange = (e)=>{
    setSearchString(e.target.value.toLowerCase())
         //JS will assing the key's value based on the name of the variable similar to key and assign its value
      }

  const onTitleChange = (e)=>{
    setTitle(e.target.value)
             //JS will assing the key's value based on the name of the variable similar to key and assign its value
  }

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users=>{
      setMonsters( users)
      }
    )
  },[])

  useEffect(()=>{
    const filterMonsters = monsters.filter((monster)=>{
      return (monster.name.toLowerCase().includes(searchString))
        })
      setFilterMonsters(filterMonsters)
  },[monsters,searchString])

  return(
    <div className="App">
      <h1 className='app-title'>{title} Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder = 'search monsters' className='monsters-search-box'/>
      <SearchBox onChangeHandler={onTitleChange} placeholder = 'Set Title' className='title-search-box'/>
      <CardList monsters={filterMonsters}/>
    </div>
  )
}
// class App extends Component {
//   constructor(){
//     super()

//     this.state = {
//       monsters:[],
//       searchString:''
//   }
//   }
//   componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users').then(response    =>response.json()).then(users=>{
    //       this.setState(()=>{
    //         return {monsters:users}
    //       }//,()=> console.log(this.state)
    //     )
    //   }
    // )
   
//   }


  // onSearchChange = (e)=>{
  //   this.setState(()=>{
  //     const searchString = e.target.value.toLowerCase()
  //     return {searchString} //JS will assing the key's value based on the name of the variable similar to key and assign its value
  //     })

  // }

//   render(){
//     const {monsters, searchString} = this.state
//     const {onSearchChange} = this


    
    // const filterMonsters = monsters.filter((monster)=>{
    //   return (monster.name.toLowerCase().includes(searchString))
    // })
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder = 'search monsters'
//         className='monsters-search-box'/>
        
//         <CardList monsters={filterMonsters}/>
//       </div>
//     );
//   }
//   }
export default App;
