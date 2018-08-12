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
            title: 'Cột số một',
            taskIds: ['task1', 'task3', 'task2', 'task4', 'task5']
        }
    },
    columnOrder: ['column1']
}

class Main extends Component {
    state = initData

    onDragEnd = result => {
        const { destination, source, draggableId } = result
        if (
            !destination ||
            (destination.droppableId === source.droppableId && destination.index === source.index)
        ) { return }

        // reoder column.taskIds
        const column = this.state.columns[source.droppableId]
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
    }

    render() {
        let { columnOrder, columns, tasks } = this.state
        return(
            <div className="row">
                <div className="mr-t-7"></div>
                <div className="col">
                    <DragDropContext onDragEnd={this.onDragEnd}>
                    {
                        columnOrder.map(columnId => {
                            const column = columns[columnId]
                            const _tasks = column.taskIds.map(taskId => tasks[taskId])
                            return <CardColumn key={column.id} column={column} tasks={_tasks} />
                        })
                    }
                    </DragDropContext>
                </div>
            </div>
        )
    }
}

export default Main
