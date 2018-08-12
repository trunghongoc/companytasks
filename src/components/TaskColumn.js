import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'
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
            <Draggable
                key={task.id}
                draggableId={task.id}
                index={index}
                isDragDisabled={false}
            >
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div>
                            <div className={this.isDraggingClass(snapshot.isDragging)} >
                                <div className="header"></div>
                                <div className="body">{task.content}</div>
                                <div className="footer">
                                    {
                                        task.users.map((user, index) => {
                                            return <Link key={index} to={"/user-acount/" + user.userName}><Avatar>{ user.short }</Avatar></Link>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="h-5"></div>
                        </div>
                    </div>
                )}
            </Draggable>
        )
    }
}

export default TaskColumn
