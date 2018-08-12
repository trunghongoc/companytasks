import React, { Component } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
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
        let { column, tasks, index } = this.props
        return(
            <Draggable
                draggableId={column.id}
                index={index}
            >
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="card-column">
                    <div className="card-column-title">{column.title}</div>
                    <Droppable
                        droppableId={column.id}
                        isDropDisabled={false}
                        direction="vertical"
                        type="task"
                    >
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
                </div>
            )}
            </Draggable>
        )
    }
}

export default CardColumn
