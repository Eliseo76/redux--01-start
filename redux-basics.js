//This is the nodeJs import syntax
const redux = require('redux');
//This is a function but don't execute yet!
const  createStore = redux.createStore;
// creating initializeState in the file
const initializeState={
  counter:0
};


//Reducer -  is a function that receives two
// things the currentState and the action then
// the function to return one thing the updated state,
// this one here is doing nothing yet.
// Create this first before the store
// We are passing a default arg to the state to show something.
const rootReducer = (state = initializeState, action)=>{
    if(action.type === 'INC_COUNTER'){
        //We cannot mutate the state directly we need to do any changes
        //immutably like state.counter++, use spread operator. We return an
        //object that copies state and call the thing we want changed and
        //modify that we call state.counter but only to read it not change it
        //then we add to it, creating a new copy of the state object
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER'){
// Here we are also copying the state an then using the action.value
//         from the action we created to determine how much we add.
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    // We return state if nothing applies
    return state;
};
//Store - Allows use create a new redux store.
// Must have a reducer to work.
const store = createStore(rootReducer);
//Now the store is created
console.log(store.getState());
// to see this we need to first go to the terminal
// and type:  node redux-basics.js or the file name.

// Subscription - This must come before the action so that the
//code finds out if the state has changed before performing any actions
//this takes a function with no args and then execute anything upon
//state updates, so when state is changed we can invoke responses.
store.subscribe(()=>{
    console.log('[Subscription]', store.getState())
});

// Dispatching Action- to use this you call the store
//this function takes an argument this argument is as action
//THIS HAS TO BE A OBJECT WITH type: what comes after is a
//unique id, convention is a 'ALL_UPPERCASE_STRING' here
//we are using increment counter. We can also pass an optional
//payload. type is required.
store.dispatch({type:'INC_COUNTER'});
//Added value to 10 because we want to add 10 with this one.
store.dispatch({type:'ADD_COUNTER', value: 10});
//lets see the state now.
console.log(store.getState());
// returns
// { counter: 0 }
// { counter: 0 }
// We showed the state twice because we are not doing
// anything to the state with these actions




