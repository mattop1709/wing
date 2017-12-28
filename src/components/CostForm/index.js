import { connect } from "react-redux";
import CostForm from "./CostForm";

import {
	setCostValue,
	setBudgetValue,
	setCostCategory,
	setCostCentre
} from "../../redux/request/action";

const mapStateToProps = state => {
	return {
		requestDetails: state.request[0]
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setCostValue: costValue => {
			dispatch(setCostValue(costValue));
			console.log(costValue);
		},
		setBudgetValue: budgetValue => {
			dispatch(setBudgetValue(budgetValue));
			console.log(budgetValue);
		},
		setCostCategory: value => {
			dispatch(setCostCategory(value));
			console.log(value);
		},
		setCostCentre: costCentreText => {
			dispatch(setCostCentre(costCentreText));
			console.log(costCentreText);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CostForm);
