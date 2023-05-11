import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);


  const addCash = (cash) =>{
    dispatch({type:'ADD_CASH', payload:cash})
  }

  const getCash = (cash) =>{
    dispatch({type:'GET_CASH', payload:cash})
  }

  const addCustomer = (name) =>{
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) =>{
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div>{cash}</div>
     <button onClick={() => addCash(Number(prompt()))}>Add</button>
     <button onClick={() => getCash(Number(prompt()))}>Get</button>
     <button onClick={() => addCustomer(prompt())}>Add Client</button>
     {customers.length > 0 ?
    <div>{customers.map(customer => <div onClick={() => removeCustomer(customer)}>{customer.name}</div>)}</div>
    :
    <div>Clients not founded</div>
    }
    </div>
  );
}

export default App;
