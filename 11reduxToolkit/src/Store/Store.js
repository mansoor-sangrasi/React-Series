import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Features/ReduceTodo/Todo.js'

export const store=configureStore({
    reducer:todoReducer
})
