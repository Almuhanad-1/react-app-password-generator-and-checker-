import './generate.css';

const Generate = () => {

    const generatePassword = () => {


    }

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h1>Password Generating Tool</h1>
                        <p>With password generating tool, I will help you to generate a new password. Click the generate button
                            then copy your password</p>
                        <form className="">
                            <div className="row g-3 align-items-center">
                                <div className="col-9">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="passwordField"
                                            placeholder="Password will appear here" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <button type="button" className="btn btn-primary w-100" onClick={generatePassword()}>Generate Password</button>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="hasCapital" />
                                                <label className="form-check-label" htmlFor="hasCapital" >
                                                    Has capital letters
                                                </label>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="hasSmall" />
                                                <label className="form-check-label" htmlFor="hasSmall">
                                                    Has small letters
                                                </label>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="hasNumbers" />
                                                <label className="form-check-label" htmlFor="hasNumbers">
                                                    Has Numbers
                                                </label>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="hasSpecial" />
                                                <label className="form-check-label" htmlFor="hasSpecial">
                                                    Has special characters
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Generate;