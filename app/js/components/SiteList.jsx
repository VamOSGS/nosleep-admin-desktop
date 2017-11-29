import React, { Component, Fragment } from 'react';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import DeleteIcon from 'material-ui-icons/Delete';
import config from '../../../config';

class SiteList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentWillMount() {
    this.props.onGetSites();
  }
  handleDelete = site => e => {
    fetch(`${config.url}sites/${site}`, { method: "DELETE" })
      .then(() => this.props.onGetSites())
  }
  render() {
    const list = this.props.sites.main;
    return (
      <List subheader={<ListSubheader>Serving sites</ListSubheader>}>
        {list.map((item, i) => <Fragment key={i}>

          <ListItem button>
            <ListItemIcon>
              <DeleteIcon onClick={this.handleDelete(item)} />
            </ListItemIcon>
            <ListItemText inset primary={<a href={`https://${item}.herokuapp.com/`} target="blank">{item.toUpperCase()}</a>} />
          </ListItem>
          <Divider />
        </Fragment>

        )}
      </List>
    );
  }
}

export default SiteList;