import { connect } from 'react-redux';
import { fetchStories } from './actions';
import List from './List';

const mapStateToProps = (state: any) => ({ stories: state.listState.stories });
const mapDispatchToProps = { fetchStories };

export default connect(mapStateToProps, mapDispatchToProps)(List);
