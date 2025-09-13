import { Link, Form, redirect,useActionData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo,SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";



export const action = async ({request}) =>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = {msh:''}

  if(data.password.length<3){
    errors.msg = 'password to short';
    return errors;
  }

  try {
    await customFetch.post('/auth/login', data);
    toast.success ('Login success');
    return redirect('/dashbord');
  } catch (error) {
    errors.msg = error?.response?.data?.msg
    return errors;
  }
  return null;
}

const Login = () => {

  const navigate = useNavigate();

  const loginDemoUSer = async() =>{
    const data ={
      email:'test@test.com',
      password:'abel@123'
    }
    try {
      await customFetch.post('/auth/login', data);
    toast.success ('Test the app');
    navigate('/dashbord')
    } catch (error) {
      errors.msg = error?.response?.data?.msg
    }
  }

  const errors = useActionData();
  return (
    <Wrapper>
     <Form method='post'className='form'>
      <Logo/>
      <h4>Login</h4>
      {errors?.msg && <p style={{color:'red'}}>{errors.msg}</p> }
      <FormRow type='email' name='email' />
      <FormRow type='password' name='password'/>
      <SubmitBtn/>
      <button type='button' className='btn btn-block' onClick={loginDemoUSer}>Explore The App</button>
      <p>
                Not a member Yet?
                <Link to= '/register' className='member-btn'>
                Register
                </Link>
              </p>
     </Form>
    </Wrapper>
  )
}

export default Login
