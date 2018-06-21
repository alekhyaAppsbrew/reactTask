/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
//import List from 'material-ui/List/List';
//import ListItem from 'material-ui/List/ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';

export class RepoListItem extends React.PureComponent {
  render() {
    const { item } = this.props;
    let nameprefix = '';


    // Put together the content of the repository
    const content = (
      <Wrapper>
        <RepoLink  target="_blank">
          {nameprefix + item.login}
        </RepoLink>
      </Wrapper>
    );

    // Render the content into a list item
    return(  <ListItem key={`repo-list-item-${item.full_name}`} item={content} />);
	/**return 
	<ListItemAvatar
	   key={`repo-list-item-${item.full_name}`}
      disabled={true}
	  item={content}
      leftAvatar={
        <Avatar src="images/uxceo-128.jpg" />
      }
    >
      Image Avatar
    </ListItemAvatar>;**/
	
	
	
  }
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(RepoListItem);
