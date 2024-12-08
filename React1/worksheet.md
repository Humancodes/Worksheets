# 1. Understanding and Implementing State and Props
## 1. Debug 
### Fixed the code
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Web Developer"
  });

    function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    
## 2. Explaination Video Link

## 3. Output based



## 4. Related topic Question

Lifting state up involves moving the state from child components to their nearest common parent


# 2. Lifecycle Management with Functional Components
## 1. Debug 
### Fixed the code
useEffect(() => {
  const timerID = setInterval(() => setSeconds(seconds + 1), 1000);
  return () => clearInterval(timerID);
}, []);
## 2. Explaination Video Link

## 3. Output based


## 4. Related topic Question
The useEffect hook is ideal for handling side effects like data fetching in functional React components. It allows you to execute asynchronous tasks when the component mounts or when certain dependencies change.


# 3. Controlled and Uncontrolled Components
## 1. Debug 
### Fixed the code

## 2. Explaination Video Link

## 3. Output based



## 4. Related topic Question


# 4.Context API for Theme Switching
## 1. Debug 
### Fixed the code

## 2. Explaination Video Link

## 3. Output based



## 4. Related topic Question


# 5. Understanding the Key Prop and List Rendering in React
## 1. Debug 
### Fixed the code
{contacts.map((contact, index) => (
      <li key={contact.id}>{contact.name}</li> // using contact.id
))}

## 2. Explaination Video Link

## 3. Output based



## 4. Related topic Question


