import React, { useState } from "react";
import { Popover, List, ListItem, ListItemText } from "@material-ui/core";
import ShareIcon from '@material-ui/icons/Share';
import { connect } from "react-redux";

function Share(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleShareClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleShareClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  
  return (
    <div className="share">
      <ShareIcon className="share-icon" onClick={handleShareClick} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleShareClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          className: 'sharePopover'
        }}
      >
        <List component="nav" aria-label="share">
          <ListItem className="share-on">
            <ListItemText primary="Share on" />
          </ListItem>
          <ListItem button>
            <img className="mr-16 normal" src="/assets/images/share-facebook.png" alt="facebook" />
            <img className="mr-16 hover" src="/assets/images/share-facebook-hover.png" alt="facebook" />
            <ListItemText primary="Facebook" />
          </ListItem>
          <ListItem button>
            <img className="mr-16 normal" src="/assets/images/share-instagram.png" alt="instagram" />
            <img className="mr-16 hover" src="/assets/images/share-instagram-hover.png" alt="instagram" />
            <ListItemText primary="Instagram" />
          </ListItem>
          <ListItem button>
            <img className="mr-16 normal" src="/assets/images/share-linkedin.png" alt="linkedin" />
            <img className="mr-16 hover" src="/assets/images/share-linkedin-hover.png" alt="linkedin" />
            <ListItemText primary="Linkedin" />
          </ListItem>
          <ListItem button>
            <img className="mr-16 normal" src="/assets/images/share-twitter.png" alt="twitter" />
            <img className="mr-16 hover" src="/assets/images/share-twitter-hover.png" alt="twitter" />
            <ListItemText primary="Twitter" />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {  }
)(Share);