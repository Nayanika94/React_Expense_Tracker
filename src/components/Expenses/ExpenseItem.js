import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    //array destructuring
    //useState returns two values 
    const [title, setTitle] = useState(props.title);//only called inside react component items also not in any nested component function as well

    //per component intance level state is defined
    const clickHandler = () => {
        setTitle('Updated!!');//the component is reevalauetd again using useState()
        console.log(title);//only schedules the update of the value
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'> {/*dynamic placeholders*/}
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>

    );
}

export default ExpenseItem;