import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
// import NullComponent from './../containers/NullComponent'

class TaskColumn extends Component {
    render() {
        let { task, index } = this.props
        return(
            <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div className="task-column">
                            {task.content}
                        </div>
                    </div>
                )}
            </Draggable>
        )
    }
}

export default TaskColumn
