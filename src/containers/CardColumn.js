import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import TaskColumn from './../components/TaskColumn'

class CardColumn extends Component {
    isDraggingClass = (yes) => {
        if (yes) {
            return "card-column-task-list task-is-draggingOver-on-board"
        } else {
            return "card-column-task-list"
        }
    }

    render() {
        let { column, tasks } = this.props
        return(
            <div className="card-column">
                <div className="card-column-title">{column.title}</div>
                <Droppable droppableId={column.id}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            className={this.isDraggingClass(snapshot.isDraggingOver)}
                        >
                            {tasks.map((task, index) => (
                                <TaskColumn key={task.id} task={task} index={index} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        )
    }
}

export default CardColumn
