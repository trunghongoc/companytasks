import React, { Component } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { Icon } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars'
import TaskColumn from './../components/TaskColumn'
import { connect } from 'react-redux'
import { Button } from 'antd/lib/radio';

function mapStateToProps(state: Object): Object {
    return {
      windowSize: state.windowSize
    }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
  }
}

class CardColumn extends Component {
    isDraggingClass = (yes) => {
        if (yes) {
            return "card-column-task-list task-is-draggingOver-on-board"
        } else {
            return "card-column-task-list"
        }
    }

    render() {
        let { column, tasks, index, windowSize } = this.props
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
                    <div className="card-t">
                        <div className="header">
                            <div className="left">
                                <p className="inline-block">{column.title}</p>
                            </div>
                            <div className="right text-right">
                                <span className="pointer btn-ellipsis">
                                    <Icon type="ellipsis" />
                                </span>
                            </div>
                            <div className="clearfix"></div>
                        </div>

                        <div className="body">
                            <Scrollbars
                                autoHeight
                                autoHeightMin={120}
                                autoHeightMax={windowSize.height - 230}
                            >
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
                            </Scrollbars>
                        </div>

                        <div className="footer">
                            <Button className="btn-add">
                                <Icon type="plus"/>
                                Thêm thẻ khác
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            </Draggable>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardColumn)
