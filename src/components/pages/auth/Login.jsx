import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    return(

        <>

            <section className="auth-box">

                <div className="container">
                    
                    <div className="box-wrapper">

                        <div className="row">

                            <div className="col-md-5 mx-auto mrgt3">

                                <form onSubmit={(e) => e.preventDefault}>

                                    <h2 className="fs-18 ui-text-center mrgb2 onmineshaft">MYDO</h2>

                                    <div className="frm-box">

                                        <h3 className="fs-18 onmineshaft ui-text-center mrgb2">Welcome Back!</h3>

                                        <div className="form-group">

                                            <label className="fs-14 onmineshaft">Email Address</label>
                                                <input type="text" className="form-control" placeholder="enter password" />

                                        </div>

                                        <div className="form-group">
                                        <label className="fs-14 onmineshaft">Password</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Password" />
                                            <div className="input-group-append">
                                            <span className="input-group-text" id="basic-addon2"><Link to="" className="onmineshaft fs-13 ">show</Link></span>
                                            </div>
                                        </div>
                                        </div>

                                        <div className="form-group mrgt2">

                                            <button className="btn btn-lg btn-block omineshaft font-weight-bold fs-16 bg-silver" type="submit">Login</button>

                                        </div>

                                        <div className="ui-text-center">

                                            <Link to="" className="onblue fs-14">forgot password</Link> <br />

                                            <Link to="" className="onblue fs-14">New User? Register Here</Link>

                                        </div>

                                    </div>

                                </form>


                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>

    )

}

export default Login;