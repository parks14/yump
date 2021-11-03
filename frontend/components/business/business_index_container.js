import { connect } from "react-redux";
import BusinessIndex from "./business_index";
import { fetchBusinesses } from "../../actions/business_actions";

const mSTP = (state, ownProps) => {
    return {
        businesses: Object.values(state.entities.businesses)
    }
};

const mDTP = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(mSTP, mDTP)(BusinessIndex);