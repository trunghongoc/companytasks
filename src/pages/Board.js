import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Button, Avatar } from 'antd'
import { connect } from 'react-redux'
import CardColumn from './../containers/CardColumn'

function mapStateToProps(state: Object): Object {
    return {
      windowSize: state.windowSize
    }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
  }
}

const initData = {
    tasks: {
        task1: {id: 'task1', content: '1. navigate to Theme Admin', users: [
            {id: 1, name: 'Hồ Ngọc Trung', short: 'T', userName: 'trunghongoc'}
        ]},
        task2: {id: 'task2', content: '2. select option Import Demo Content', users: []},
        task3: {id: 'task3', content: '3. click on the button', users: []},
        task4: {id: 'task4', content: '4. after click on button', users: []},
        task5: {id: 'task5', content: '5. demo content will be automatically uploaded', users: []},
        task6: {id: 'task6', content: '6. navigate to Theme Admin', users: []},
        task7: {id: 'task7', content: '7. select option Import Demo Content', users: []},
        task8: {id: 'task8', content: '8. click on the button', users: []},
        task9: {id: 'task9', content: '9. after click on button', users: []},
        task10: {id: 'task10', content: '10. demo content will be automatically uploaded', users: []}
    },
    columns: {
        'column1': {
            id: 'column1',
            title: 'Cột số một 1',
            taskIds: ['task1', 'task3', 'task2', 'task5', 'task6', 'task7', 'task8', 'task9', 'task10']
        },
        'column2': {
            id: 'column2',
            title: 'Cột số hai 2',
            taskIds: ['task4']
        },
        'column3': {
            id: 'column3',
            title: 'Cột số ba 3',
            taskIds: []
        },
        'column4': {
            id: 'column4',
            title: 'Cột số bốn 4',
            taskIds: []
        },
        'column5': {
            id: 'column5',
            title: 'Cột số năm 5',
            taskIds: []
        }
    },
    columnOrder: ['column1', 'column2', 'column3', 'column4', 'column5']
}

class Board extends Component {
    state = initData

    onDragStart = () => {
    }

    onDragUpdate = update => {
        // const { destination } = update
        // const opacity = destination
        //     ? destination.index / Object.keys(this.state.tasks).length
        //     : 0
    }

    onDragEnd = result => {
        const { destination, source, draggableId, type } = result
        if (
            !destination ||
            (destination.droppableId === source.droppableId && destination.index === source.index)
        ) { return }

        if (type === 'column') {
            const newColumnOrder = Array.from(this.state.columnOrder)
            newColumnOrder.splice(source.index, 1)
            newColumnOrder.splice(destination.index, 0, draggableId)

            const newState = {
                ...this.state,
                columnOrder: newColumnOrder
            }
            this.setState(newState)
            return
        }

        // reoder column.taskIds
        const startColumn = this.state.columns[source.droppableId]
        const finishColumn = this.state.columns[destination.droppableId]
        if (startColumn === finishColumn) {
            let column = startColumn
            const newTaskIds = Array.from(column.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)
    
            const newColumn = {
                ...column,
                taskIds: newTaskIds
            }
    
            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            }
            this.setState(newState)
        } else {
            // Moving from one list another
            const startTaskIds = Array.from(startColumn.taskIds)
            startTaskIds.splice(source.index, 1)
            const newStart = {
                ...startColumn,
                taskIds: startTaskIds
            }

            const finishTaskIds = Array.from(finishColumn.taskIds)
            finishTaskIds.splice(destination.index, 0, draggableId)
            const newFinish = {
                ...finishColumn,
                taskIds: finishTaskIds
            }

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newStart.id]: newStart,
                    [newFinish.id]: newFinish
                }
            }
            this.setState(newState)
        }
    }

    render() {
        let { columnOrder, columns, tasks  } = this.state
        let height = (this.props.windowSize.height - 115)
        // let width = this.props.windowSize.width - 30

        return(
            <div>
                <div className="row">
                    <div className="col col-12">
                        <div className="board-nav">
                            <div className="left">
                                <Button className="btn-no-border btn-eee btn-text-black"><strong>Kinh doanh sịp (Dự án: siêu sịp)</strong></Button>
                                <Button className="btn-no-border btn-eee btn-text-black btn-star-active" icon="star-o" />
                                <span className="space-span">|</span>
                                <span className="list-user">
                                    <Link to="/user-acount/uybv"><Avatar>U</Avatar></Link>
                                    <Link to="/user-acount/uy"><Avatar>Y</Avatar></Link>
                                    <Link to="/user-acount/uy2"><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Link>
                                    <Avatar className="pointer">200+</Avatar>
                                    <Avatar className="pointer">+</Avatar>
                                </span>
                            </div>
                            <div className="right text-right">
                                <Button className="btn-no-border btn-eee btn-text-black"><strong>Gantt</strong></Button>
                                <Button className="btn-no-border btn-eee btn-text-black"><strong>Mở rộng</strong></Button>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>

                <div className="board-card" style={{ height: height + 'px' }}>
                    <DragDropContext
                        onDragStart={this.onDragStart}
                        onDragUpdate={this.onDragUpdate}
                        onDragEnd={this.onDragEnd}
                        className="flex"
                    >
                        <Droppable
                            droppableId="all-column"
                            direction="horizontal"
                            type="column"
                        >
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="flex"
                                >
                                    {
                                        columnOrder.map((columnId, index) => {
                                            const column = columns[columnId]
                                            const _tasks = column.taskIds.map(taskId => tasks[taskId])
                                            return (
                                                <div key={column.id} className="flex-card-horizontal">
                                                    <CardColumn column={column} tasks={_tasks} index={index} />
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="clearfix"></div>
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
