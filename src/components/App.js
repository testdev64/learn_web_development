import React from 'react';
import propTypes from 'prop-types';
import Header from './Header';
import ContestPreview from './ContestPreview';


//class based components
class App extends React.Component {
 state = {
   pageHeader : 'Naming Contests'
 };

 componentDidMount() {
   console.log('did mount');
 }

 componentWillUnmount(){
   console.log('Will Unmount');
 }

 render(){
   return (
     <div className="App">
       <Header handleMessage = {this.state.pageHeader}/>
       <div>
         {this.props.contests.map(contests =>
           <ContestPreview {...contests} />
         )}
       </div>
     </div>
   );
 }
}

export default App;
