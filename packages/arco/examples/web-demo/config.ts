export const formConfig = [
	{
		type: "password",
		label: "原密码",
		field: "password",
		rules: [
			{
				required: true,
				message: "原密码不能为空 ",
			},
		],
		validateTrigger: ["change", "blur"],
		change: () => {
			console.log("password change");
		},
	},
	{
		type: "password",
		label: "新密码",
		field: "newpsw",
		rules: [
			{
				required: true,
				message: "新密码不能为空 ",
			},
		],
		validateTrigger: ["change", "blur"],
	},

	{
		type: "password",
		label: "确认密码",
		field: "repsw",

		rules: [
			{
				required: true,
				message: "确认密码不能为空 ",
			},
		],
		validateTrigger: ["change", "blur"],
	},
	// {
	// 	type: "slot",
	// 	name: "buttonArea",
	// },
];
