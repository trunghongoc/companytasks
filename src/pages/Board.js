import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import CardColumn from './../containers/CardColumn'

const initData = {
    tasks: {
        task1: {id: 'task1', content: '1. navigate to Theme Admin'},
        task2: {id: 'task2', content: '2. select option Import Demo Content'},
        task3: {id: 'task3', content: '3. click on the button'},
        task4: {id: 'task4', content: '4. after click on button'},
        task5: {id: 'task5', content: '5. demo content will be automatically uploaded'}
    },
    columns: {
        'column1': {
            id: 'column1',
            title: 'Cột số một 1',
            taskIds: ['task1', 'task3', 'task2', 'task5']
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
        }
    },
    columnOrder: ['column1', 'column2', 'column3']
}

class Main extends Component {
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
        const { destination, source, draggableId } = result
        if (
            !destination ||
            (destination.droppableId === source.droppableId && destination.index === source.index)
        ) { return }

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
        let { columnOrder, columns, tasks } = this.state
        return(
            <div className="row">
                <div className="mr-t-7"></div>
                <DragDropContext
                    onDragStart={this.onDragStart}
                    onDragUpdate={this.onDragUpdate}
                    onDragEnd={this.onDragEnd}
                >
                    {
                        columnOrder.map(columnId => {
                            const column = columns[columnId]
                            const _tasks = column.taskIds.map(taskId => tasks[taskId])
                            return <CardColumn key={column.id} column={column} tasks={_tasks} />
                        })
                    }
                </DragDropContext>
            </div>
        )
    }
}

export default Main
