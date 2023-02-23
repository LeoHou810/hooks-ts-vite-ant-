import { Dropdown, Menu } from "antd";
import { connect, useDispatch } from "react-redux";
import { update } from "@/redux/reducerCreator";

const Language = (props: any) => {
	const { language } = props;
	const dispatch = useDispatch();
	const setLanguageClick = type => {
		dispatch(update("global", "language", type));
	};
	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: <span>简体中文</span>,
					onClick: () => setLanguageClick("zh"),
					disabled: language === "zh"
				},
				{
					key: "2",
					label: <span>English</span>,
					onClick: () => setLanguageClick("en"),
					disabled: language === "en"
				}
			]}
		/>
	);
	return (
		<Dropdown overlay={menu} placement="bottom" trigger={["click"]} arrow={true}>
			<i className="icon-style iconfont icon-zhongyingwen"></i>
		</Dropdown>
	);
};

const mapStateToProps = (state: any) => state.global;
export default connect(mapStateToProps)(Language);
