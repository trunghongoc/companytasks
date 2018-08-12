import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
// import NullComponent from './../containers/NullComponent'

class TaskColumn extends Component {
    isDraggingClass = (yes) => {
        if (yes) {
            return "task-column task-is-dragging"
        } else {
            return "task-column"
        }
    }

    render() {
        let { task, index } = this.props
        return(
            <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div className={this.isDraggingClass(snapshot.isDragging)} >
                            {task.content}
                        </div>
                    </div>
                )}
            </Draggable>
        )
    }
}

export default TaskColumn
