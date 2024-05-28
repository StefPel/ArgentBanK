import React from 'react'
import "./Accounts.scss"
import Button from '../Button/Button';

function Accounts(props) {
    const { title, amount, description } = props;
  return (
    <>
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <Button
          className="transaction-button"
          text="View transactions"
          />
        </div>
      </section>
    </>
  )
}

export default Accounts