import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div > Currency {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)} className='alert alert-danger'>
        <option value="£">Pound(£)</option>
        <option value="₹">Rupee(₹)</option>
        <option value="€">Euro(€)</option>
        <option value="$">Dollar($)</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;