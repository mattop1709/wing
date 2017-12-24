export const eeiuApprove = () => {
	return {
		type: "EEIU_APPROVED",
		eeiu: true
	};
};

export const nominatorApprove = () => {
	return {
		type: "NOMINATOR_APPROVED",
		nominator: true
	};
};

export const nominator2Approve = () => {
	return {
		type: "NOMINATOR_2_APPROVED",
		nominator2: true
	};
};

export const endorserApprove = () => {
	return {
		type: "ENDORSER_APPROVED",
		endorser: true
	};
};

export const approverApprove = () => {
	return {
		type: "APPROVER_APPROVED",
		approver: true
	};
};
