import React, { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import CountrySearch from '../../layout/partials/CountrySearch'
import CountryContext from '../../../context/countries/countryContext'

const Register = () => {
    
    const countryContext = useContext(CountryContext);

    useEffect(() => {
     
        countryContext.getCountries(9999)
        countryContext.getIpAddress()
    }, [])


    const getOptions = () => {

        const cp = countryContext.countries.map((i) => {

            let c = {
                value: i._id,
                label: i.name,
                left: i.phoneCode,
                image: i.flag ? i.flag : '../../../images/assets/c-avatar.svg'
            }
            return c;
        })
       
        return cp;
       
    }

    const setDefault = (code) => {

        if(!countryContext.loading && countryContext.countries.length > 0 ){

            const ct = countryContext.countries.find((i) => i.code2 === code);

            const fm = {
                value: ct._id,
                label: ct.name,
                left: ct.phoneCode,
                image: ct.flag ? ct.flag : '../../../images/assets/c-avatar.svg'
            }

            return fm;

        }else{
            return 1;
        }

    }

    const getSelected = (val) => {

        console.log(val);
    }
    return (
        <>
            
            <section className="auth-box">

                <div className="container">

                    <div className="box-wrapper">

                        <div className="row">

                            <div className="col-md-5 mx-auto">

                                <h2 className="fs-24 ui-text-center mrgb2 onmineshaft">MyDo</h2>

                                <form onSubmit={(e) => e.preventDefault()}>
                                
                                    <div className="frm-box">

                                        <h3 className="fs-18 onmineshaft ui-text-center mrgb2">Create account!</h3>

                                        <div className="form-group">

                                            <label htmlFor="" className="fs-14 onmineshaft">Email Address</label>
                                            <input type="email" className="form-control" placeholder="you@example.com" />

                                        </div>
                                        
                                        <div className="form-group">

                                            <label htmlFor="" className="fs-14 onmineshaft">Phone Number</label>
                                            {/* <input type="number" className="form-control" placeholder="0800 7000 0000" /> */}
                                            <CountrySearch 
                                            options={getOptions}
                                            defaultValue={!countryContext.loading ? countryContext.ipData ? setDefault(countryContext.ipData.loc) : setDefault('NG') : setDefault('NG')}
                                            selected={getSelected} />

                                        </div>

                                        <div className="form-group">

                                            <label htmlFor="" className="fs-14 onmineshaft">Password</label>
                                            
                                            <div className="input-group">
                                                <input type="password" className="form-control" placeholder="Enter Password" />
                                                <div className="input-group-append">
                                                <span className="input-group-text" id="basic-addon2">
                                                    <Link to="" className='onmineshaft fs-13'>
                                                        Show
                                                    </Link>
                                                </span>
                                            </div>
                                        
                                        </div>

                                        </div>

                                        <div className="form-group mrgt2">

                                            <button type="submit" className="btn btn-lg bg-silver font-weight-bold btn-block onminesshaft fs-16">
                                                Register
                                            </button>

                                        </div>
                                        <div className="ui-text-center mr mrgb1">

                                            {/* <Link to="" className="onblue fs-14">Forgot password</Link> */}
                                            <br />
                                            <Link to="" className="onblue fs-14">Already have an account? Login here</Link>

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

export default Register;