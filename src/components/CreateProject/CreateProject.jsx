import React from 'react'
import Input from '../Input/Input'
import './style.scss'
import { createProject } from '../../actions/user'
import { Formik } from 'formik'
import { validationShema, initialValues } from '../../variables/variables'


const CreateProject = ({ closeEvent }) => {

    return (
        <Formik
            initialValues={initialValues}
            validateOnBlur // Validation when you come to another field
            validationSchema={validationShema}
            onSubmit={values => createProject(values)}

        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <>
                    <div className="blur-box" onClick={closeEvent}>
                    </div>
                    <form className="create_form" onSubmit={(e) => e.target.reset()}>
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
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                            >
                                Create
                            </button>
                        </div>

                    </form>
                </>
            )}
        </Formik>

    )
}

export default CreateProject
