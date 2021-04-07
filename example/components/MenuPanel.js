import React from 'react'
import { Box, Menu, SubMenu, MenuItem, FAIcon } from '../../src'
import { CompatUtils } from "../../src/utils/CompatUtils"
import { CompatAlign } from "../../src/utils/CompatAlign";

export const MenuPanel = () => {

  return (
    <Box vertical padding={8}>
      <Menu width={400}>
        <MenuItem id={CompatUtils.uid()}>
          <Box vAlign={CompatAlign.Center}>
            <div style={{width: '30px'}}>
              <FAIcon icon='fa fa-home'/>
            </div>
            <span>Home</span>
          </Box>
        </MenuItem>
        <MenuItem id={CompatUtils.uid()}>
          <Box vAlign={CompatAlign.Center}>
            <div style={{width: '30px'}}>
              <FAIcon icon='fa fa-user'/>
            </div>
            <span>User</span>
          </Box>
        </MenuItem>
        <SubMenu id={CompatUtils.uid()} title="CEO">
          <SubMenu id={CompatUtils.uid()} title="CTO">
            <SubMenu id={CompatUtils.uid()} title="Software engineer">
              <SubMenu id={CompatUtils.uid()} title="Level 1">
                <SubMenu id={CompatUtils.uid()} title="Sublevel 1">
                  <MenuItem id={CompatUtils.uid()}>Subsublevel 1</MenuItem>
                  <MenuItem id={CompatUtils.uid()}>Subsublevel 2</MenuItem>
                </SubMenu>
                <SubMenu id={CompatUtils.uid()} title="Sublevel 2">
                  <MenuItem id={CompatUtils.uid()}>Subsublevel 1</MenuItem>
                  <MenuItem id={CompatUtils.uid()}>Subsublevel 2</MenuItem>
                </SubMenu>
              </SubMenu>
              <MenuItem id={CompatUtils.uid()}>Level 2</MenuItem>
              <MenuItem id={CompatUtils.uid()}>Level 3</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu id={CompatUtils.uid()} title="CFO">
            <SubMenu id={CompatUtils.uid()} title="Finance assistant">

            </SubMenu>
          </SubMenu>
          <SubMenu id={CompatUtils.uid()} title="CMO">
            <SubMenu id={CompatUtils.uid()} title="Social media">

            </SubMenu>
          </SubMenu>
        </SubMenu>
        <SubMenu id={CompatUtils.uid()} title="Shop">
          <SubMenu id={CompatUtils.uid()} title="Books">
            <SubMenu id={CompatUtils.uid()} title="Sale">
              <MenuItem id={CompatUtils.uid()}>Paperbacks</MenuItem>
            </SubMenu>
            <MenuItem id={CompatUtils.uid()}>Fiction</MenuItem>
            <MenuItem id={CompatUtils.uid()}>Nonfiction</MenuItem>
          </SubMenu>
          <SubMenu id={CompatUtils.uid()} title="Hardware">
            <MenuItem id={CompatUtils.uid()}>Desktops</MenuItem>
            <MenuItem id={CompatUtils.uid()}>Laptops</MenuItem>
          </SubMenu>
        </SubMenu>
        <MenuItem id={CompatUtils.uid()}>Sites</MenuItem>
        <MenuItem id={CompatUtils.uid()}>Zones</MenuItem>
        <MenuItem id={CompatUtils.uid()}>Tests</MenuItem>
        <MenuItem id={CompatUtils.uid()}>Reports</MenuItem>
      </Menu>
    </Box>
  )
}