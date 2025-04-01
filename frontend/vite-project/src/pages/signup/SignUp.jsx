import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='signup'>
        <div className='card'>
            <div className='left'>
                <h2>-<br /> FriendsGUI Cadastrar <br />-</h2>
                <p>
                    Uma plataforma de mídia social que conecta você com seus amigos e familiares.<br />
                    Compartilhe seus pensamentos, fotos e experiências com as pessoas que mais importam para você.
                </p>

                <span>Você já tem uma conta?</span>
                <Link to='/login'>
                    <button className='btn btn-primary'>Entrar</button>
                </Link>
            </div>

            <form className='right'>
                <input type="text" required placeholder='Username' />
                <input type="email" required placeholder='Seu Email' />
                <input type="password" required placeholder='Sua Senha' />

                <button type='submit' className='btn'>Cadastrar</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp
