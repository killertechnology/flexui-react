import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import Header from '../components/header'
import About from '../components/about'
import Projects from '../components/projects'
import Navigation from '../components/navigation'


const App = () => (
        <div id="wrapper">
          <div align="center">
	          <Header />
	          <Navigation />  
	          <div id="main">
	            <About />
	            <Projects />         
	          </div>
        	</div>
      	</div>
)

export default App;



/*
<script language='Javascript'>

$(".navul").click(function() {
    //console.log(this.id);
    $('html, body').animate({
        scrollTop: $(this.id).offset().top
    }, 2000);
});
</script> 
*/