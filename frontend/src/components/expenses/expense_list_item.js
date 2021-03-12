import React from 'react'

const ExpenseListItem = props => {
    return (
        <li>
            <h4>{props.expense.body + ' ' + props.expense.amount}</h4>
            <button className="delete" onClick={() => props.destroyExpense(props.expense._id)}>Delete this Expense</button>
        </li>
    )
}

export default ExpenseListItem;