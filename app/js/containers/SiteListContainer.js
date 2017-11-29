import { connect } from 'react-redux';
import SiteList from '../components/SiteList';
import { getSites } from '../actions';

const mapStateToProps = state => ({
  sites: state
});

const mapDispatchToProps = dispatch => ({
  onGetSites: () => dispatch(getSites())
})

const SiteListContainer = connect(mapStateToProps,mapDispatchToProps)(SiteList);

export default SiteListContainer;