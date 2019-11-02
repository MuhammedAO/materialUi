import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

class UserForm extends Component {
    state ={
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
        
    }

  //Proceed to nextStep
  nextStep = () => {
      const {step} = this.state;
      this.setState({
          step: step + 1
      });
  }

    //go back to prevStep
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle input fields Change
    handleChange = input=>  e => {
        const {value} = e.target
      this.setState({[input]: value})
    }
    
  

    render() {
        const {step, ...rest} = this.state;
        const values = {...rest}
      
     switch (step) {
     case 1 :
         return(
             <FormUserDetails
             nextStep={this.nextStep}
             handleChange={this.handleChange}
             values={values}
             />
         )

         case 2:
            return(
                <FormPersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
            )
         
         case 3 :
            return (
                <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                
                />
            )

         case 4 :
            return <Success/>
             
     }
    }
}

export default UserForm;
