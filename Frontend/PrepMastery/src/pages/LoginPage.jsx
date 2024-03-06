import React, { useEffect } from 'react'
import '../assets/login.css'
// import '../assets/img/demo.svg'
// import 'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css'
function LoginPage() {
  useEffect(() => {
    const signUp = document.getElementById('sign-up');
    const signIn = document.getElementById('sign-in');
    const loginIn = document.getElementById('login-in');
    const loginUp = document.getElementById('login-up');

    const toggleLogin = () => {
      loginIn.classList.toggle('block');
      loginIn.classList.toggle('none');
      loginUp.classList.toggle('block');
      loginUp.classList.toggle('none');
    };

    signUp.addEventListener('click', toggleLogin);
    signIn.addEventListener('click', toggleLogin);

    return () => {
      signUp.removeEventListener('click', toggleLogin);
      signIn.removeEventListener('click', toggleLogin);
    };
  }, []);
  return (
    <div>
      <div className="login">
        <div className="login__content">
          <div className="login__img">
            <img src="..\public\demo.svg" alt="IMAGE" />
          </div>

          <div className="login__forms">
            <form action="" className="login__registre" id="login-in" method="post">

              <h1 className="login__title">Sign In</h1>

              <div className="login__box">
                <i className='bx bx-user login__icon'></i>
                <input type="text" placeholder="Username" className="login__input" name="username" required />
              </div>

              <div className="login__box">
                <i className='bx bx-lock-alt login__icon'></i>
                <input type="password" placeholder="Password" className="login__input" name="password" required />
              </div>

              <a href="#" className="login__forgot">Forgot password?</a>

              <button type="submit" className="login__button button">Sign In</button>

              <div className="login__social">
                <a href="#" className="login__social-icon"><i className='bx bxl-google'></i> Continue with Google</a>
              </div>

              <div>
                <span className="login__account">Don't have an Account ? </span>
                <span className="login__signin" id="sign-up">Sign Up</span>
              </div>
            </form>

            <form action="" className="login__create none" id="login-up" method="post">

              <h1 className="login__title">Create Account</h1>

              <div className="login__box">
                <i className='bx bx-user login__icon'></i>
                <input type="text" placeholder="Student Name" className="login__input" name="name" required />
              </div>

              <div className="login__box">
                <i className='bx bx-at login__icon'></i>
                <input type="text" placeholder="Email" className="login__input" name="email" required />
              </div>

              <div className="login__box">
                <i className='bx bx-calendar login__icon'></i>
                <input type="text" placeholder="Date of Birth" className="login__input" id="dobInput" onFocus={(e) => e.target.type = 'date'} name="dob" required />
              </div>

              <div className="login__box">
                <i className='bx bx-lock-alt login__icon'></i>
                <input type="password" placeholder="Password" className="login__input" required />
              </div>

              <button type="submit" className="login__button button">Sign Up</button>

              <div className="login__social">
                <a href="#" className="login__social-icon"><i className='bx bxl-google'></i> Continue with Google</a>
              </div>

              <div>
                <span className="login__account">Already have an Account ? </span>
                <span className="login__signup" id="sign-in">Sign In</span>
              </div>
            </form>


          </div>
        </div>
      </div>


    </div>
  )
}

export default LoginPage