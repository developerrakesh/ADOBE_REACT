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
	