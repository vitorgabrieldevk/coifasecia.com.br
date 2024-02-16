
import Index from './views/Index';

import Logo from './common/images/logo-techlabs-preto.png';
import ImagemDecorativa from './common/images/Imagem-decoracao.png';

import './common/css/Admin.Module.css';


import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2'

const Admin = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        const userLoggedIn = checkUserLoggedIn();
        setIsLoggedIn(userLoggedIn);
    };

    const checkUserLoggedIn = () => { 
        return localStorage.getItem('isLoggedIn') === 'true';
    };

    return (
        <section className="site-corpo-login">
            {isLoggedIn ? ( 
                <Index />
            ) : (
                <section className='d-flex-login'>
                    <div className='left-Login'>
                    
                    <img src={ Logo } alt="Logo TechLabs" />

                    <div className='box-form'>
                        <Formik
                            initialValues={{ nome: '', password: '' }}

                            validate={ values => {

                                const errors = {};
                                if (!values.nome) {
                                    errors.nome = 'Campo obrigatório';
                                }
                                if (!values.password) {
                                    errors.password = 'Campo obrigatório';
                                }

                                return errors;

                            }}
                            
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {

                                    console.log(values);
                                    
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className='item-form'>
                                        <label>Login/E-mail</label>
                                        <Field className="Filds" type="text" name="nome" placeholder="Nome/E-mail do usuário" />
                                        <ErrorMessage className="ErrorMessage" name="nome" component="div" />
                                    </div>
                                    <div className='item-form'>
                                        <label>Senha</label>
                                        <Field className="Filds" type="password" name="password" placeholder="●●●●●●●●●●●●" />
                                        <ErrorMessage className="ErrorMessage" name="password" component="div" />
                                    </div>
                                    <button className='buttonSubmit' type="submit" disabled={ isSubmitting }> Entrar </button>
                                </Form>
                            )}
                        </Formik>
                        </div>

                        <p className='AuthorPainel'>Teclabs</p>

                    </div>
                    <div className='rigth-decoration'>
                        <img src={ ImagemDecorativa } alt="Imagem de decoração." />
                    </div>
                </section>
            )}
        </section>
    );
};

export default Admin;