import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions";
import BusinessShow from './business_show';

const mSTP = (state, ownProps) => {
    return {
        business: state.entities.businesses[ownProps.match.params.businessId]
    };
};

const mDTP = dispatch => ({
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId))
});

export default connect(mSTP, mDTP)(BusinessShow);