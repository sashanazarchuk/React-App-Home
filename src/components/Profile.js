
import { useState } from "react";
export default function Profile() {

    const [userName, setUserName] = useState("");
    const [data, setData] = useState({});


    const onChangeHandler = (e) => {
        setUserName(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${userName}`)
            .then((response) => {
                return response.json();
            }).then((originalData) => {
                if (originalData) {
                    setData(originalData);
                }
            })
    }
    return (
        <>
            <div class="container">
                <h1>Search login </h1>
                <form onSubmit={onSubmitHandler}>
                    <input className="input" type={userName} onChange={onChangeHandler}></input>
                    <button type="submit" label="Search">
                        Search
                    </button>
                </form>
            </div>
            <div className="card">
                <div className="blocks">
                    <img className="git-img" src={data.avatar_url} alt="git-user" />
                    <label>
                        <span className="data">Name:</span>{data.name}
                        <span className="userdata"></span>
                    </label>
                    <hr></hr>
                    <label>
                        <span className="data">Login:</span>{data.login}
                        <span className="userdata"></span>
                    </label>
                    <hr></hr>
                </div>

                <div className="blocks">
                    <label>
                        <span className="data">URL to github:</span>{data.html_url}
                        <span className="userdata"></span>
                    </label>
                    <hr></hr>
                    <label>
                        <span className="data">Blog: </span>{data.blog}
                        <span className="userdata"></span>
                    </label>
                    <hr></hr>
                    <label>
                        <span className="data">City:</span>{data.location}
                        <span className="userdata"></span>
                    </label>
                    <hr></hr>
                    <label>
                        <span className="data">Email:</span>{data.email}
                        <span className="userdata"></span>
                    </label>
                    <hr></hr>
                    <div className="follow">
                        <label>
                            <span class="data">Followers:</span>{data.followers}
                            <span className="userdata"></span>
                        </label>
                        <label>
                            <span class="data">Following</span>{data.following}
                            <span className="userdata"></span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}