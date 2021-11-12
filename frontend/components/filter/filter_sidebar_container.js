import { connect } from "react-redux";
import FilterSidebar from "./filter_sidebar";
import { fetchBusinesses } from "../../actions/business_actions";

const mSTP = state => {
    return {
        businesses: Object.values(state.entities.businesses)
    }
};

const mDTP = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(mSTP, mDTP)(FilterSidebar);