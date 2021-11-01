import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
    };
};

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        demoLogin: user => dispatch(login(user)) 
    };
};

export default connect(mSTP, mDTP)(SessionForm);