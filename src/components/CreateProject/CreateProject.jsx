import React, { useState } from 'react'
import Input from '../Input/Input'
import './style.scss'

const CreateProject = ({closeEvent}) => {
    const [title, setTitle] = useState("")
    const [key, setKey] = useState("")
    return (
        <>
            <div className="blur-box" onClick={closeEvent}>
            </div>
            <div className="create_form">
                <p className="create_title">
                    Create a new project
                </p>
                <div className="create_box row">
                    <Input className={"create-title"} placeholder={"Title"} value={title} setValue={setTitle} />
                    <Input className={"create-key"} placeholder={"Key"} value={key} setValue={setKey} />
                </div>
                <div className="create_box row end">
                    <button
                    onClick={closeEvent}
                        className="register-login"

                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="register-create"
                    >
                        Create
                    </button>
                </div>

            </div>
        </>

    )
}

export default CreateProject
