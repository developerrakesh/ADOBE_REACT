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

=============

Day 3 Recap: 
=> React-Context
=> styled-components
=> React-router-dom ( Router, Route, Switch, Link, params )

Whenever state or props changes the component renders ; which in turn triggers child components to re-render
==> override shouldComponentUpdate(nextProps, nextState) ==> true / false ==> complex props
==> extends PureComponent [ primitive type ==> good ]
    
===================

 fake RESTAPI ==> json-server
npm i concurrently 

 scripts : {
    "run-dev" :  ""concurrently \" "npx json-server --watch data.json --port 1234\" \"react-scripts start\""
  }

============================================

Day 4:

=====

HOC ==> High Order Component

HOF ==> High Order Functions are functions which can take function as argument/ return a function
==> Example: map, filter, forEach
    map accepts transform function
    filter accept predicate function


HOC can take Component as argument / return a component

Why HOC?
  ==> to introduce new props and behaviour
  ==> conditionally return components


class DivComponent extends React.Component {
  render() {
    return <>
      count {this.props.count} <br />
      <button type="button" onClick={() => this.props.increment()} > Click </button>
      </>
  }
}

       
const withCounter = (WrappedComponent) => {
          return class extends React.Component {
              constructor(props) {
                super(props);
                this.state = {
                  count : 0
                }
              }

              increment = () => {
                this.setState({ count : this.state.count + 1})
              }

              render() {
                return <WrappedComponent count = {this.state.count} increment={this.increment} />
              }
          }
 }

 const DivWithCounter = withCounter(DivComponent);

 function App() {
  return <DivWithCounter />
 }

ReactDOM.render(<App/>, document.getElementById("app"));

=======================================


ErrorBoundary Components

Each and every component can have exception handling
JSX

{
  try {

  } catch(err) {
    ...
  }

}


ErrorBoundary Components ==> component which overrides
==> error ==> stack trace
==> errorInfo ==> message

componentDidCatch(error, errorInfo) {

}

static getDerivedStateFromError() {
  return {hasError: true}
}

====

class  ErrorBoundary extends React.Component {
 
  constructor(props) {
    super(props);
     this.state = {
       hasError: false,
       error: null,
       errorInfo : ""
     }
  }

  componentDidCatch(error, errorInfo) {
      this.setState({
          error,
          errorInfo,
          hasError: true
    })
  }

  render() {
      if(this.state.hasError) {
        <>
            <div> Boom :-( {this.state.errorInfo} </div>
        </>
        } else {
           return this.props.children
        }
      }
  }
}


function App() {
    return <ErrorBoundary>
              <A/>
              <B/>
              <C/>
                <ErrorBoundary>
                    <D/>
                    <E/>
                </ErrorBoundary>
      </ErrorBoundary>
}

=================================================================================

class Components ==> Life cycle methods; state; behaviour

React Hooks: ==> 16.8+

-----------------

Goal ==> Avoid class components and prefer functional components

function App() {
}

class App extends Component {
  state = {
    count: 0,
    user: "Larry"
  }

  setCount(cnt) {
    this.setState({
      count: cnt
    })
  }

  setUser(usr) {
    this.setState( {
      user: usr
    })
  }
}

1) useState
    to introduce state in functional component

    function App() {
      let [count, setCount] = React.useState(0);
      let [user, setUser] = React.useState("Peter");
      return (
          <>
            Count:{count} User : {user} <br />
            <button onClick={() => setCount(count + 1)}>Inc</button>
          </>
      )
    }

    ReactDOM.render(<App/>, document.getElementById("app"));

2) useReducer
    ==> if state is complex object or need to implement conditional mutations [ ADD_TO_CART, REMOVE_FROM_CART, CLEAR_LIST]

    Reducers are functions which take state and action 
      ==> based on action disptached from event/UI [ view dispatch action]
      ==> copy of state ==> mutate
    ==> return new state

    Action is of type 
    ADD_TO_CART:
    {
      type: "ADD_TO_CART",
      payload: {"id": 1,"name": "iPhone", "price" : 89000.00}
    }

    REMOVE_FROM_CART:
    {
      type: "REMOVE_FROM_CART",
      payload: 3
    }

    cartlist is state = []

    ===

    let initialState = {count:0};

    let countReducer = (state, action) => {
      switch(action.type) {
        case "INCREMENT" : return {count : state.count + action.payload};
        case "DECREMENT" :  return {count : state.count - 1};
        default: return state;
      }
    }


     function App() {
      let [state, dispatch] = React.useReducer(countReducer, initialState);
      function increment() {
        let action = {"type": "INCREMENT", payload: 10};
        dispatch(action);
      }
      return (
          <>
            Count:{state.count} 
            <button onClick={increment}>Inc</button>
          </>
      )
    }

    ReactDOM.render(<App/>, document.getElementById("app"));

    ====


    let initState = {cart : [], total : 0};

    let cartReducer = (state, action) => {
        switch(action.type) {
            case "ADD_TO_CART":
              return { ...state, action.payload}
            case "REMOVE_ALL": 
              return {cart : [], total : 0}
            default: return state;
        }

    }

========================

  
  React Context and Functional components:

  const NumberContext  = React.createContext();

  function App() {
    return (
        <NumberContext.Provider value={24}>
            <div>
                <Display/>
            </div>
        </NumberContext.Provider>
    )
  }

  function Display() {
    return (
          <NumberContext.Consumer>
              {
                value => <div> {value} </div>
              }
          </NumberContext.Consumer>
      )
  }

3) useContext()
    helps using Context without Consumer Code

  function Display() {
    const data = React.useContext(NumberContext);
    return <div> {data} </div>
  }

  ==> Task ==> Product.js convert into functional Component with Reat.useContext(ProductContext);

  Using Multiple Providers:

  function HeaderComponent() {
    const user = React.useContext(UserContext);
    const notifications = React.useContext(NotificationContext);
    return <header>
          Welcome, {user.name} You have {notifications.length} <br />
    </header>    
  }

    old way without useContext
     return (
          <UserContext.Consumer>
              {
                value => <div> {value.name} </div>
              }
              <NotificationContext.Consumer>
                  {
                    value => You have {value.length} <br />
                  }
              </NotificationContext.Consumer>              
          </UserContext.Consumer>
      )
  ===========

  4) useEffect
      ==> to acheive tasks what we do in  class Component life-cycle methods

      function App() {
        let [count, setCount] = React.useState(0);
        let [user, setUser] = React.useState("Peter");

        // componentDidUpdate
        React.useEffect(() => {
            console.log("called effect 1", count);
        });


         // componentDidMount
        React.useEffect(() => {
            console.log("called effect 2", count);
        }, []);

         // only when user state changes 
        React.useEffect(() => {
            console.log("called effect 3", count);
        }, [user]);

         return (
          <>
            Count:{count} User : {user} <br />
            <button onClick={() => setCount(count + 1)}>Inc</button>
          </>
          )
      }

  5) Memoization is a pattern
    React.memo() is for Memoization pattern

    Without memoize:

function Child(props) {
    console.log("child renders!!!");
    return <h1> Child : {props.name} </h1>
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

ReactDOM.render(<Parent />, document.getElementById("app"))

====


function Child(props) {
    console.log("child renders!!!");
    return <h1> Child : {props.name} </h1>
  }

let MemoChild = React.memo(Child); // PureComponent equals

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
          <MemoChild name={this.state.name} />
          <button onClick ={() => this.increment()}>Inc</button>
        </>
  }
}

ReactDOM.render(<Parent />, document.getElementById("app"))

==============

function applyEquals(props, nextProps) {
  // logic
}

let MemoChild = React.memo(Child, applyEquals); // shouldComponentUpdate

================

https://raw.githubusercontent.com/BanuPrakash/ADOBE_REACT/main/memo_callback.js

Modify the code for optimization:

====================================

Recap:
  PureComponent, shouldComponentUpdate
  ErrorBoundary ==> componentDidCatch(error, errorInfo) {}
  High Order Components 
    ==> introduces new props [ variables and behaviour]; conditionally return components

  React Hooks: 
    useState(), 
    useReducer() [ reducers take state and action; mutate on the copy of state
    and return; dispatch() to call reducer function]

    React.memo() ==> HOC to memoize the props and state and to avoid re-render of memoized component;
    render only if props passed to child component & state change

    useContext() ==> instead of writing Context.Consumer

    ===============

    memo_callback.js ==> task


function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      Example: Title
    </h2>
  )
};


function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

function Count({ text, count }) {
  console.log(`Rendering ${text}`)
  return <div>{text} - {count}</div>
}


function ParentComponent() {
  const [age, setAge] = React.useState(25)
  const [salary, setSalary] = React.useState(50000)

   const incrementAge = () => {
    setAge(age + 1)
  };

  const incrementSalary = () => {
      setSalary(salary + 1000)
  }
  
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

ReactDOM.render(<ParentComponent/>, document.getElementById("app"));

===============

Memoizing Components:

function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      Example: Title
    </h2>
  )
};

const MemoTitle = React.memo(Title);

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}
const MemoButton = React.memo(Button);

function Count({ text, count }) {
  console.log(`Rendering ${text}`)
  return <div>{text} - {count}</div>
}

const MemoCount = React.memo(Count);

function ParentComponent() {
  const [age, setAge] = React.useState(25)
  const [salary, setSalary] = React.useState(50000)

   const incrementAge = () => {
    setAge(age + 1)
  };

  const incrementSalary = () => {
      setSalary(salary + 1000)
  }
  
  return (
    <div>
      <MemoTitle />
      <MemoCount text="Age" count={age} />
      <MemoButton handleClick={incrementAge}>Increment Age</MemoButton>
      <MemoCount text="Salary" count={salary} />
      <MemoButton handleClick={incrementSalary}>Increment Salary</MemoButton>
    </div>
  )
}

ReactDOM.render(<ParentComponent/>, document.getElementById("app"));

===

React Hooks:
5) useCallBack() ==> is used to memoize a function
  
function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      Example: Title
    </h2>
  )
};

const MemoTitle = React.memo(Title);

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}
const MemoButton = React.memo(Button);

function Count({ text, count }) {
        console.log(`Rendering ${text}`)
        return <div>{text} - {count}</div>
}

const MemoCount = React.memo(Count);

function ParentComponent() {
        const [age, setAge] = React.useState(25)
        const [salary, setSalary] = React.useState(50000)

         const incrementAge = React.useCallback(() => {
                setAge(age + 1)
        },[age]);

        const incrementSalary = React.useCallback(() => {
                   setSalary(salary + 1000)
        },[salary]);
  
        return (
                <div>
                        <MemoTitle />
                        <MemoCount text="Age" count={age} />
                        <MemoButton handleClick={incrementAge}>Increment Age</MemoButton>
                        <MemoCount text="Salary" count={salary} />
                        <MemoButton handleClick={incrementSalary}>Increment Salary</MemoButton>
                </div>
        )
}

ReactDOM.render(<ParentComponent/>, document.getElementById("app"));
  
6) "x" is fetched from API call;
let data = React.useMemo(x); // memoize a variable
React.memo(component); // memoize a component

=================================

7) React Reference

class App extends React.Component {
  emailRef = React.createRef(); // reference [ pointer]

  render() {
    return <>
          <input type="text" ref={this.emailRef} /> 
          <button onClick={() => this.doTask()}>Click</button>
    </>
  }

  doTask() {
      console.log(this.emailRef.current.value);
      this.emailRef.current.focus();
  }
}

3rd party components ==> KendoUi, PrimeReact, Adobe Spectrum

When 3rd party components are used in project => we create "ref" and pass it to 3rd party components
and invoke methods of 3rd party components


   <DataTable ref={(el) => this.dt = el} value={this.state.customers} paginator rows={10}
                        header={header} className="p-datatable-customers"
                        globalFilter={this.state.globalFilter} emptyMessage="No customers found.">
                        <Column field="name" header="Name" body={this.nameBodyTemplate} filter filterPlaceholder="Search by name" />
                        <Column field="country" filterField="country.name" header="Country" body={this.countryBodyTemplate} filter filterPlaceholder="Search by country" filterMatchMode="contains" />
                        <Column field="representative.name" header="Representative" body={this.representativeBodyTemplate} filter filterElement={representativeFilter} />
                        <Column field="date" header="Date" body={this.dateBodyTemplate} filter filterElement={dateFilter} filterFunction={this.filterDate} />
                        <Column field="status" header="Status" body={this.statusBodyTemplate} filter filterElement={statusFilter}/>
                        <Column field="activity" header="Activity" body={this.activityBodyTemplate} filter filterPlaceholder="Minimum" filterMatchMode="gte" />
                    </DataTable>

    Within React Component:

    onDateChange(e) {
        this.dt.filter(e.value, 'date', 'custom');
        this.setState({ selectedDate: e.value });
    }

     onStatusChange(e) {
        this.dt.filter(e.value, 'status', 'equals');
        this.setState({ selectedStatus: e.value })
    }
========


class App extends React.Component {
 
  render() {
    return <>
          <input type="text" ref={input => this.emailRef = input} /> 
          <button onClick={() => this.doTask()}>Click</button>
    </>
  }

  doTask() {
      console.log(this.emailRef.current.value);
      this.emailRef.current.focus();
  }
}

===

8) Forward Reference:

const EmailInput = React.forwardRef( (props, ref) => {
  return <input type="text" ref ={ref} {...props} />
})



class App extends React.Component {
  emailRef = React.createRef(); // reference [ pointer]

  render() {
    return <>
          <EmailInput ref={this.emailRef}  style={{"width":"50px"}} disabled/> 
          <button onClick={() => this.doTask()}>Click</button>
    </>
  }

  doTask() {
      console.log(this.emailRef.current.value);
      this.emailRef.current.focus();
  }
}

===========================

Building Your Own Hooks

------------------------
useState() hook which gets and sets data from localStorage /sessionStorage


function useLocalState(key, defValue) {
  const [state,setState] = React.useState(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key)) || String(defValue))
    } catch(error) {
      value = String(defValue);
    }
  });

  React.useEffect(() => {
      window.localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
}

function App() {
  const [state, setState] = useLocalState("app-state",0);
  return <>
      <button onClick={() => setState(state + 1)}>Click {state} </button>
  </>
}

==============================

