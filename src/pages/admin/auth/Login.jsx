import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginSuccess, loginFail } from '@/src/stores/store'
import { banner9 } from "@/src/assets"

const Login = () => {
  const dispatch = useDispatch()
    const [message, setMessage] = useState("")
  const [identifiants, setIdentifiants] = useState({});
  const [identifiantsErrors, setIdentifiantsErrors] = useState()
  // const history = useHistory()

  const handleChange = (e) => {
    const { id, value } = e.target

    setIdentifiants((prev) =>  ({
      ...prev,
      email: id == "email" ? value : prev.email,
      password: id == "password" ? value : prev.password
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = fetch("http://localhost:3002/api/auth/login",{
                            method: "POST",
                            body: JSON.stringify(identifiants)
                          })
    .then(response => response.json())
    .then(data => {

      if(data.errors){
        setIdentifiantsErrors((prev) => ({
            ...prev,
            email: data.errors.emailError ? data.errors.emailError : "Entrez votre email",
            password: data.errors.passwordError ? data.errors.passwordError : "Entrez votre mot de passe"
        }))
      } else if(data.message){
          setMessage(data.message)
      } else if(data.token){
          dispatch(loginSuccess(data.token))
          // history.push('/')
      }
    })
    .catch(error => {
      dispatch(loginFail(error))
      console.log(error)
      setMessage("Une erreur c'est produite.")
    })

    setIdentifiants({})
  };

  return (
    <header className='login'>
      
      <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={identifiants.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={identifiants.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      </div>
      <div className='title-container'>
      <h1>Connexion</h1>
      </div>
      <div className='img-container'>
        <img src={banner9} alt="" />
      </div>
    </header>
  );
};

export default Login;
