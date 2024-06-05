
import classes from './App.module.css'
import { CardList } from './components/CardList';

function App() {
  const panels = [{id: 'e1', panelImage: 'URL("https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', panelTitle: 'Science World'},
  {id: 'e2', panelImage: 'URL("https://images.unsplash.com/photo-1553570739-330b8db8a925?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', panelTitle: 'Sea World'},
  {id: 'e3', panelImage: 'URL("https://plus.unsplash.com/premium_photo-1687545808830-6aa3b84c103b?q=80&w=1702&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', panelTitle: 'Rain Forest'},
  {id: 'e4', panelImage: 'URL("https://plus.unsplash.com/premium_photo-1676212779193-99637df36134?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', panelTitle: 'Mountains'},
  {id: 'e5', panelImage: 'URL("https://images.unsplash.com/photo-1661705292145-d243e70f40e6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', panelTitle: 'City on Water'}
  ]

  return (
    <div className={classes.App}>
      <CardList data={panels}/>
    </div>
  );
}

export default App;
