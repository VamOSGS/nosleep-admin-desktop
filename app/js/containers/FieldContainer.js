import { connect } from 'react-redux';
import Field from '../components/Field';
import { getSites } from '../actions';

const mapDispatchToProps = dispatch => ({
  onGetSites: () => dispatch(getSites())
})

const FieldContainer = connect(null,mapDispatchToProps)(Field);

export default FieldContainer;