# ADOBE_REACT
React Training

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 

banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/ADOBE_REACT

----------------------------------------------------------

Softwares Required:
1) Visual Studio Code.
2) Chrome Web Browser
	Redux DevTools
	React Development Tools
3) NodeJS Latest LTS

---------------------------------------------------------

NodeJS and Webpack

-------------------

NodeJs: as a platform /Environment with v8 JS engine for building web application
	TypeScript/ ES 6 / DART / CoffeeScript ==> Transpile / PreProcessor (Babel / tsc / Tracuer ) ==> ES5 
	==> Browserify ==> many "ts/js" ==> main.chunk.js and libraries into "vendor.js", "bundle.js"
	==> Run Tests ==> Unit Testing and E2E

	tsc a.ts ==> a.js
	tsc b.ts ==> a.js

	JavaScript Build Tools:
	Grunt, Gulp, Webpack

	Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, uglify, compilation, unit testing, and linting. 

	Webpack

	https://createapp.dev/


	folder> npm i

	node_modules folder ==> all dependecies are downloaded

	Module System:

	IIFE

	(function() {
		var a = 10;
		function doTask() {
			can access a
		}
	})();


	(function() {
		var a = 100;
		var b = 210;

		function doTask() {
			a and b are 100 and 210
		}
	})();


	CommonJS module system:

	lib.js

	function doTask() {}

	module.exports = {doTask}


	other.js

	let doTask = require('./lib');

	ES 6 Module System:


npm run build-dev

> webpackexample@1.0.0 build-dev C:\Users\banup\Desktop\ReactWS\ADOBE_REACT\webpackexample
> webpack --mode development

asset bundle.js 6.1 KiB [emitted] (name: main)
runtime modules 670 bytes 3 modules
cacheable modules 1.34 KiB
  ./src/index.js 196 bytes [built] [code generated]
  ./src/Person.js 1010 bytes [built] [code generated]
  ./src/lib.js 168 bytes [built] [code generated]
webpack 5.39.1 compiled successfully in 2130 ms



C:\Users\banup\Desktop\ReactWS\ADOBE_REACT\webpackexample>npm run build-prod

> webpackexample@1.0.0 build-prod C:\Users\banup\Desktop\ReactWS\ADOBE_REACT\webpackexample
> webpack --mode production

asset bundle.js 543 bytes [emitted] [minimized] (name: main)
orphan modules 1.15 KiB [orphan] 2 modules
./src/index.js + 2 modules 1.34 KiB [built] [code generated]
webpack 5.39.1 compiled successfully in 1338 ms

================================================================================

React is a View library [ V part of M V C]

Angular ==> Framework	

<div id="root"></div>

Babel: Babel includes JSX processing.

https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js

https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js

React.createElement:
let Welcome = React.createElement("h1", {style:{'color':'red'}}, "Welcome to Adobe");

ReactDOM.render(Welcome, document.getElementById("root"))



Functional Component:
function Welcome() {
  return <div>
        <h1> Welcome to Adobe </h1>
     </div>
}

ReactDOM.render(<Welcome />, document.getElementById("root"))


===

Props ==> mechanism using which parent pass data to child

function Welcome(props) {
  return <div>
        <h1>{props.title} in {props.name} </h1>
     </div>
}

ReactDOM.render(<Welcome title="Welcome to React" name ="Adobe"/>, document.getElementById("root"))

====

function Welcome({title, name}) {
  return <div>
        <h1>{title} in {name} </h1>
     </div>
}

ReactDOM.render(<Welcome title="Welcome to React" name ="Adobe"/>, document.getElementById("root"))

=========================

Resume after Tea Break @ 11:00

===================
Scaffolding react application code:

npm i -g create-react-app
create-react-app customerapp


Now:
npx create-react-app customerapp

React Class Component

class Welcome extends React.Component {
	// instance variables as in "state"
	// behaviour ==> methods

	render() {
		return JSX
	}
}

Button as Component ==> color, caption, border ==> state
click, mousemove, mousehover, ... behaviour

=====================================

create-react-app uses webpack internally

 "react": "^17.0.2",
 "react-dom": "^17.0.2",
 "react-scripts": "4.0.3",

 "scripts": {
    "start": "react-scripts start", // webpack http lite server, loads the bundle on the server, opens the browser
    "build": "react-scripts build", // build file; which an be deployed on real-time HTTP server [ IIS, Apache]
    "test": "react-scripts test", 
    "eject": "react-scripts eject"
  }


npm eject ==> webpack.config.js ==> where customization can be done

Props and state are immutable

State Mutation:

this.state.customers = .. ; // not allowed

Async

 this.setState({
            customers: custs
        }, () => console.log("Customer Deleted!!!"));


state has "x", "y" and "customers", "complete"


=======================
E2E testing:

customerapp> npm i -D cypress

=======================

npx create-react-app phoneapp
phoneapp> npm i bootstrap react-router-dom styled-components


==============================


	Day 1 Recap:

	Webpack; React ==> props and state [ immutable ]

	Parent passes data to children in the form of props;
	state and behaviour in component

Virtual DOM
React.createElement
Functional Component and JSX
Class Component ==> render() returns JSX
	==> state and behaviour

	HOF ==> map to transform ==> we used it for converting data ==> Component

	CustomerApp: ==> CustomerList includes "Filter" and n no of "CustomerRow" components
	special props "key" should be used whenever a list is rendered

	Binding events:
	
	filterEvent={this.filterCustomers.bind(this)}
	
	OR
	
	delEvent={(id) => this.deleteCustomer(id)}


Day 2:
=====

Testing React application:

Unit Testing Frameworks:
1) Mocha
2) Jasmine
3) Jest

Assertion Librarires: Chai

Testing React Components:
DOM testing library
jest-dom: Jest provides a wrapper on DOM testing library

Enzyme for Testing React Components:
methods like mount(); shallow() ; render() 

const wrapper = mount(<Foo id="foo" />); // get the component and its children
const wrapper = shallow(<Foo id="foo" />); // get the component but not its children

Enzyme was more of testing state and props 

RTL ==> React Testing Library for Unit Testing

 "@testing-library/jest-dom": "^5.11.4",
 "@testing-library/react": "^11.1.0",
 "@testing-library/user-event": "^12.1.10",


RTL is a wrapper on jest-dom; gives additional apis to access React Components [ DOM ]; BDD

similar to RTL ==> Angular Test Bed built on Jasmine

RTL methods to access the component/elements

getByXXX()  ==> throws exception if not found
	getByRole("button") getByRole("input")
	getByText(/Customer Application/i)  
	getByPlaceHolderText("search by name")
	getByTestId("someid"); <div data-testid="someid"></div>


queryByXXX() ==> returns null if not found

findByXXX() ==> for Promise based component creation [ API call]


XXXX.test.js


==========

Unit testing using RTL
// Mock or sample data for "customer" props
// mock deleteCustomer
// render(<CustomerRow delEvent={(id) => this.deleteCustomer(id)}  customer={c} key={c.id} />);

	===

	Cypress ==> E2E testing

 =========================
 Code Coverage:
 npm test -- --coverage

 ===========================================

 PhoneApp

 React Context ==> React version 16.7

 
 let PersonContext = React.createContext();

class PersonProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "name" : "Banu",
      "email" : "someemail",
      "updateEmail" : this.updateEmail.bind(this)
    }
  }
  updateEmail(em) {
    this.setState( {
      "email" : em
    });
  }

  render() {
    return <PersonContext.Provider value = {{...this.state}}>
            {this.props.children}
      </PersonContext.Provider>
  }
}

class App extends React.Component {
  render() {
     return <PersonProvider>
          <First/>
      </PersonProvider>
  }
}

function First() {
  return <div> <h1> First Component !!! </h1> <Second /> </div>
}
    
class Second extends React.Component {
  render() {
    return <PersonContext.Consumer>
        {
          value =>  {
            return <div>
                      Name : {value.name} <br /> Email: {value.email} <br />
                    <button onClick={() => value.updateEmail("banu@gmail.com")} 
                      type="button">Change </button>
              
              </div>
          }
      }
      </PersonContext.Consumer>
  }      
}
    
    ReactDOM.render(<App/>, document.getElementById("root"));
  =================

  PhoneApp application:
  phoneapp> npm i bootstrap react-router-dom styled-components

  1) uses ReactContext to avoid "props" passing thro intermediary components

  2) uses Router
  		npm i react-router-dom

  		SPA ==> Single Page Application will have one html page
  				We need to display different views for diffent URL

  				http:server/products
  				http:server/products/mobile
  				http:server/products/mobile/iphone
  				http:server/products/mobile/pixel

  				http:server/products/orders
  				http:server/products/order/customer/3
  				http:server/products/customer/3/orders

  				Need?
  					1) SEO
  					2) Bookmark URI
  					3) History API
  					4) Lazy load a component
  					5) Providing Guards to each Route

  	3) styled-components

  	4) Bootstrap ==> Responsive Web Design CSS Framework ==> Adopt to different devices and Resolutions
  		 @media queries ==> uses 12 column system
  		 or Bulma	

  	5) font-awesome ==> for icons
  	6) google-fonts


  	Components:
  	1) Navbar.js
  	2) ProductList.js
  	3) Product.js
  	4) Cart.js
  	5) CartList.js


  	
  	6) Details.js
  	/details/:id ==> id is path params

  	http://server/details/4
  	http://server/details/21


  	http://server/products?type=mobile ==> Query Params

  	7) Default.js


  	return <div>


  	</div>


  	return <React.Fragment>



  	</React.Fragment>


  	return <>

    			</>

    ==========

    copy "Button.js" into "components" folder

    overwrite "Navbar.js" with the one present in "share" folder

		overwrite "App.css"

		Router Link:

		 <Link to="/" className="nav-link">   
                    Products
     </Link>     
      <Route exact path="/" component={ProductList} />


     HyperLink:

      <a href="/" className="nav-link">   
                    Products
      </a> 

      place href in Addressbar

      ===

      copy "data.js" into "src" folder
      copy "img" folder into "public"

=======================================================

Router; styled-components
phoneapp
      

      App.js ==> Router configuration is Done
      Navbar.js
      Button.js ==> Styled-Component

      overwrite App.css
      copy data.js ==> src folder

      copy "img" folder into "public" 


Component Life Cycle methods of React

Mounting Phase: ==> constructor() ==> render() ==> componentDidMount() ==> update the state ==> render()

In constructor have some static data
render() your screen with that static info
componentDidMount() ==> Make API calls ==> update the state and re-render the screen

Why API calls in componentDidMount() and not in constructor()?
  ==> FCP
  First Contentful Paint (FCP) is when the browser renders the first bit of content from the DOM, providing the first feedback to the user that the page is actually loading.


  =======

  Fake REST aPI:

  npx json-server --watch data.json --port 1234


Client Code:

fetch("http://localhost:1234/products/2")
  .then(response => response.json())
  .then(data => console.log(data));

axios
npm install axios

===================
PhoneApp:

1) react-router-dom
2) styled-components
3) ReactContext ==> Provider and Consumer
4) Making API calls thro axios
5) bootstrap, font-awesome and google-fonts

=============================================

class Child extends React.Component {
  render() {
    console.log("child renders!!!");
    return <h1> Child : {this.props.name} </h1>
  }
}

class Parent extends React.Component {
  state = {
    count : 0,
    name : "Banu"
  }
  
  increment() { 
    this.setState( {
      count : this.state.count + 1
    })
  }
  
  render() {
    console.log("Parent Re-renders!!!");
    return <>
          Name : {this.state.name} <br />
          Count : {this.state.count} <br />
          <Child name={this.state.name} />
          <button onClick ={() => this.increment()}>Inc</button>
        </>
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"))

============

class Child extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(this.props) !== JSON.stringify(nextProps);
  }
  render() {
    console.log("child renders!!!");
    return <h1> Child : {this.props.name} </h1>
  }
}

class Parent extends React.Component {
  state = {
    count : 0,
    name : "Banu"
  }
  
  increment() { 
    this.setState( {
      count : this.state.count + 1
    })
  }
  
  render() {
    console.log("Parent Re-renders!!!");
    return <>
          Name : {this.state.name} <br />
          Count : {this.state.count} <br />
          <Child name={this.state.name} />
          <button onClick ={() => this.increment()}>Inc</button>
        </>
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"))

====================

  class Child extends React.PureComponent {
   
  render() {
    console.log("child renders!!!");
    return <h1> Child : {this.props.name} </h1>
  }
}

===========================================================

React Hooks
