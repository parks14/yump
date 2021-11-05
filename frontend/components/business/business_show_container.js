import { connect } from "react-redux";
import { fetchBusiness } from "../../util/business_api_util";
import BusinessShow from './business_show';

const mSTP = (state, {match}) => {
    const businessId = parseInt(match.params.businessId);
    const business = selectBusiness(state.entities, businessId);

    return {
        businessId,
        business
    };
};

const mDTP = dispatch => ({
    fetchBusiness: businessId => dispatch(fetchBusiness(businessId))
});

export default connect(mSTP, mDTP)(BusinessShow);