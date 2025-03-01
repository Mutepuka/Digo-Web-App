import React from 'react'
import UserTypeCard from './user-type-card'

const CurrentSelectionForm = ({register,userType, setUserType}) => {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-12 p-4">
                <h2>Create An Account</h2>
                <p>Tell us about yourself. what made you interested in real esate and if someone refered you to this website</p>
                <UserTypeCard 
                register={register}
                title='Am a real estate agent / company'
                userType={userType}
                setUserType={setUserType}
                value='owner'
                text='Setting up my account as an agent'
                />
                <UserTypeCard 
                register={register}
                title='Estemed User'
                userType={userType}
                setUserType={setUserType}
                value='user'
                text='Am looking for a house /apartment to rent or buy'
                />
            </div>
        </div>
    </div>
  )
}

export default CurrentSelectionForm