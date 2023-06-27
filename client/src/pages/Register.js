import { useState, useEffect } from "react"
import { FormRow, Logo, Alert } from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"

const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true,
    showAlert: false,
}

const Register = () => {

    const [values, setValues] = useState(initialState)
    //global state and useNavigate

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
      };

    //Will setup functionallity when we do backend
    const handleChange = (e) => {
        console.log(e.target)
    }
    //Will setup functionallity when we do backend
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

  return (
    <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
            <Logo/>
            <h3>{values.isMember ? "Login" : "Register"}</h3>
            {values.showAlert && <Alert/>}
            {/* name input */}
            {!values.isMember && (
                <FormRow type="text" name="name" value={values.name} handleChange={handleChange}/>
            )}
            {/* email input */}
            <FormRow type="email" name="email" value={values.name} handleChange={handleChange}/>
            {/* password input */}
            <FormRow type="password" name="password" value={values.name} handleChange={handleChange}/>
            <button type="submit" className="btn btn-block">
                Submit
            </button>
            <p>
                {values.isMember?'Not a member yet?':'Already a member?'}
                <button type="button" onClick={toggleMember} className="member-btn">
                    {values.isMember?'Register':'Login'}
                </button>
            </p>
        </form></Wrapper>
  )
}
export default Register