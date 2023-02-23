import _set from "lodash/set";
import _cloneDeep from "lodash/cloneDeep";
// import { useDispatch } from "react-redux";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const dispatch = useDispatch();

/**
 * @param reducer  store.getState()获取的对象
 * @param initial  redux创建reducer时使用的初值
 * @returns {Function}
 */
export function createReducer(reducer, initial = {}) {
	return function (state = initial, action) {
		const UPDATE = `${reducer}UPDATE`; // 保证combineReducers组合后的reducer的action.type不会重复
		const route = action.route;
		const newData = action.newData;
		const isUpdate = action.isUpdate;
		switch (action.type) {
			case UPDATE:
				if (isUpdate) {
					if (!route.length) {
						// route为空字符串或空数组时更新该reducer下整个store
						return newData;
					}
					_set(state, route, newData);
				}
				return _cloneDeep(state);
			default:
				return state;
		}
	};
}

/**
 * 使用方法： update('example', 'attr1.a.a.a', undefined);
 * @param reducer  createReducer函数中的reducer
 * @param route  store.getState()获取的对象的要更改的属性，支持字符串和数组两种方式，对应lodash的set函数
 * @param newData  待赋的新值
 * @returns {{type: string, route: *, newData: *, isUpdate: boolean}}
 */
export function update(reducer, route, newData) {
	console.log("更新store值", reducer, route, newData);
	return dispatch => {
		dispatch({
			type: `${reducer}UPDATE`,
			route: route,
			newData: newData,
			isUpdate: true
		});
	};
}
