import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import TaskColumn from './../components/TaskColumn'

class CardColumn extends Component {
    render() {
        let { column, tasks } = this.props
        return(
            <div className="card-column">
                <div className="card-column-title">{column.title}</div>
                <div className="card-column-task-list">
                    <Droppable droppableId={column.id}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                            >
                                {tasks.map((task, index) => (
                                    <TaskColumn key={task.id} task={task} index={index} />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </div>
        )
    }
}

export default CardColumn
