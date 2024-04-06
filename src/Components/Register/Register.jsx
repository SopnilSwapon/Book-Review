import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";

const Register = () => {
  const [regError, setRegError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPass , setShowPass] = useState(false);
  const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // clear error or success //
    setRegError('');
    setSuccess('');
    
    // user crate //
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user);
      setSuccess('successfully created an account')
    })
    .catch(error=> {
      console.log(error.message);
      setRegError(error.message);
    })
  }
  const handleShowPassWord = () => {
    setShowPass(!showPass)
  }
    return (
        <div>
            <div className="hero bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={ showPass ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
         <div className="absolute top-14 left-44" onClick={handleShowPassWord}>
         {
           showPass ? <IoMdEye></IoMdEye>  : <IoIosEyeOff></IoIosEyeOff>
          }
         </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
      {
        regError && <p className="text-red-500">{regError}</p>
      }
      {
        success && <p className="text-green-500">{success}</p>
      }
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;