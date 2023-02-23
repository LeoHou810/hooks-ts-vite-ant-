import { Switch } from "antd";
import { connect, useDispatch } from "react-redux";
import { update } from "@/redux/reducerCreator";

const SwitchDark = (props: any) => {
	const { themeConfig } = props;
	let dispatch = useDispatch();
	const onChange = (checked: boolean) => {
		dispatch(update("global", "themeConfig.isDark", checked));
	};

	return (
		<Switch
			className="dark"
			defaultChecked={themeConfig.isDark}
			checkedChildren={<>🌞</>}
			unCheckedChildren={<>🌜</>}
			onChange={onChange}
		/>
	);
};

const mapStateToProps = (state: any) => state.global;
export default connect(mapStateToProps)(SwitchDark);
