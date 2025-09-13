import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

const Error = () => {
  const error = useRouteError();
 

    if (error.status ===404){
      console.log(error);
      return <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>ohh! page not found</h3>
          <p>we can't seem to fing the page you'r looking for </p>
          <Link to ='/dashbord'>back home</Link>       
           </div>
      </Wrapper>
    }
  return (
    <Wrapper>
      <div>
        <h3>some thing went wrong</h3>
      </div>
    </Wrapper>
  )
}

export default Error
