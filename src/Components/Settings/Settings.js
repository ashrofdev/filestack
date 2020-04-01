import React from 'react';
import './style.css'

const Settings = () => {
    return (
        <div className="settings page2">
            <header>Settings</header>
            <section>
                <h4>Profile settings</h4>
                <div className="edit">
                    <input type="file"/>
                    <input placeholder="Fullname"/>
                    <input type="email" placeholder="Email address"/>
                    <button>Save Changes</button>
                </div>
            </section>
            <section className="change_password">
                <h4>Change password</h4>
                <div className="edit">
                    <input type="password" placeholder="Current password"/>
                    <input type="password" placeholder="New password"/>
                    <input type="password" placeholder="Confirm password"/>
                    <button>Change password</button>
                </div>
            </section>
            <section className="danger">
                <h4>Danger Zone</h4>
                <p>Delete my account</p>
                <span>Deleting your account wil make you loose all saved files permanently.</span>
                <button>DELETE</button>
            </section>
        </div>
    );
};

export default Settings;