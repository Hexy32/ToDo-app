import { Action, List } from '../../types/types'

import ItemInput from './ItemInput/ItemInput'
import ItemList from './ItemList/ItemList'
import Stats from './Stats/Stats'

export default function TodoList({ list, dispatch, onMobile }: TodoListType) {
	return (
		<>
			<ItemInput
				dispatch={dispatch}
				list={list}
				onMobile={onMobile}
			/>
			<div
				className='dividerMain'
				style={{ background: list.currentTheme[1].color }}
			/>
			<ItemList
				dispatch={dispatch}
				list={list}
				onMobile={onMobile}
			/>
			<div
				className='dividerMain'
				style={{ background: list.currentTheme[1].color }}
			/>
			<Stats list={list} />
		</>
	)
}

type TodoListType = {
	dispatch: React.Dispatch<Action>
	list: List
	onMobile: boolean
}
