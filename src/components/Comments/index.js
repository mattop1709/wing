import { connect } from "react-redux";
import Comments from "./Comments";

// import { addComment } from "../../redux/comments/action";
//
// const mapStateToProps = (state, ownProps) => {
// 	const commentId = ownProps.navigation.state.params.commentId;
// 	return {
// 		requestDetails: state.request.filter(
// 			requestDetail => requestDetail.id === commentId
// 		)[0],
// 		// requestDetails: state.request[0],
// 		userDetails: state.user,
// 		commentDetails: state.comments
// 	};
// };
//
// const mapDispatchToProps = dispatch => {
// 	return {
// 		addComment: author => {
// 			dispatch(addComment(author));
// 			console.log(author);
// 		}
// 	};
// };

export default connect()(Comments);
