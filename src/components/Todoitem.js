import React, { Component } from 'react';
// import Todos from './Todos';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    render() {
        return (
            <div style = {{ backgroundColor: '#f4f4f4' }}>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}
// PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todoitem
