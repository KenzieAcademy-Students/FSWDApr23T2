# Component Lifecycle

When we run a React application, we're using JavaScript to dynamically generate a single page application in a declarative manner. However, declarative code requires a "translation" of sorts to be pre-built. 

In order for us to perform some more advanced operations in React (specifically regarding doing things in **react**ion to other events/updates), we need to learn both the terminology (i.e. the hook), as well as the various times that these reactions can take place.

## Mounting of a Component

A component is **mounted** when it is first rendered to the DOM. That is, the component was not being displayed, and upon something happening, it is now displayed. This is arguably the most important step in a component's lifecycle. This is an extension of a class component's **componentDidMount** method. This method was responsible for performing operations that should only occur *once* when the component first loads.

## Updating of a Component

Any time that a mounted component is re-rendered due to a change in state, it is **updated**. This is where a component will likely spend most of it's lifecycle. This is an extension of a class component's **componentDidUpdate** method. This method was responsible for performing operations in reaction to any other state changes that may have occurred throughout the component's lifecycle. 

## Unmounting of a Component

If a component is removed from the DOM, whether through conditional rendering, or (as we'll learn in the coming weeks) routing, it is **unmounted**. This is an extension of a class component's **componentWillUnmount** method. This method was responsible for performing operations to **clean up** any excess variables, state, etc. before unmounting the component. 

# What actually uses these phases in a component's lifecycle?

The **useEffect** hook is a function that will allow us to cause certain operations to occur as a result of these lifecycle phases. The aforementioned **componentDidMount**, **componentDidUpdate**, and **componentWillUnmount** methods from the class component are condensed into this **useEffect** hook. 