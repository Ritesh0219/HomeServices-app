import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

export default function DrawerAnchor({ open, onClose, categories }) {
  // Define the list of items for the drawer
  const list = () => (
    <Box
      role="presentation"
      onClick={onClose} // Close the drawer when clicking inside
      onKeyDown={onClose}
    >
      <List>
        {categories.map((category) => (
          <ListItem key={category}>
            <ListItemButton>{category}</ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* You can add more lists or sections here if needed */}
    </Box>
  );

  return (
    <Drawer
      anchor='left' // Define which side the drawer opens from
      open={open}
      onClose={onClose}
    >
      {list()}
    </Drawer>
  );
}
