import React from 'react'
import './style.scss'
import showmoreSVG from './showMore.svg'
import addNew from './addNew.svg'
import {NavLink} from 'react-router-dom'
import avatar from '../Images/avatar1.png'
import avatar2 from '../Images/avatar2.png'
function CollaboratorsNav() {
    return (
        <nav className="collaborators row">
            <NavLink to="/" className="collaborators_member">
                <img src={avatar} alt="avatar"  />
            </NavLink>
            <NavLink to="/" className="collaborators_member">
                <img src={avatar2} alt="avatar"  />
            </NavLink>
            <NavLink to="/" className="collaborators_member">
                <img src={avatar} alt="avatar"  />
            </NavLink>


            <button className="collaborators_showMore" title="Show more ollaborators">
                <img src={showmoreSVG} alt="showmoreSVG" />
            </button>

            <button className="collaborators_addNew" title="Add collaborator">
                <img src={addNew} alt="addNew" />
            </button>

        </nav>
    )
}

export default CollaboratorsNav
