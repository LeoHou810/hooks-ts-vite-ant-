import { createReducer } from "../reducerCreator";

export let language = createReducer("language", {
	value: {
		data: "我是初始值"
	}
});
export let global = createReducer("global", {
	token: "",
	userInfo: "",
	assemblySize: "middle",
	language: "",
	themeConfig: {
		// 默认 primary 主题颜色
		primary: "#1890ff",
		// 深色模式
		isDark: false,
		// 色弱模式(weak) || 灰色模式(gray)
		weakOrGray: "",
		// 面包屑导航
		breadcrumb: true,
		// 标签页
		tabs: true,
		// 页脚
		footer: true
	}
});
