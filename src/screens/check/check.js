import './check.css';

const Check = () => {

    const checkPassword = () => {

    }

    return (
        <div>

            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h1>Password Checker</h1>
                        <p>Check your password against several critiria, type your password in the field below</p>
                        <form className="row g-3 align-items-center mb-5">
                            <div className="col-12">
                                <label className="visually-hidden" htmlFor="passwordField">Username</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="passwordField"
                                        placeholder="Start typing your password" onKeyUp={checkPassword()} />
                                </div>
                            </div>
                        </form>
                        <ul className="list-group">
                            <li className="list-group-item" id="capitalRule">
                                <span>
                                    <i className="bi bi-x-circle"></i>
                                    <i className="bi bi-check-square"></i>
                                </span>
                                <span>Password has capital letters</span>
                            </li>
                            <li className="list-group-item" id="smallRule">
                                <span>
                                    <i className="bi bi-x-circle"></i>
                                    <i className="bi bi-check-square"></i>
                                </span>
                                <span>Password has small letters</span>
                            </li>
                            <li className="list-group-item" id="numbersRule">
                                <span>
                                    <i className="bi bi-x-circle"></i>
                                    <i className="bi bi-check-square"></i>
                                </span>
                                <span>Password has numbers</span>
                            </li>
                            <li className="list-group-item" id="charactersRule">
                                <span>
                                    <i className="bi bi-x-circle"></i>
                                    <i className="bi bi-check-square"></i>
                                </span>
                                <span>Password has special characters</span>
                            </li>
                            <li className="list-group-item" id="lengthRule">
                                <span>
                                    <i className="bi bi-x-circle"></i>
                                    <i className="bi bi-check-square"></i>
                                </span>
                                <span>Password length is larger than 8</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Check;