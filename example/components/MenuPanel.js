import { h } from 'preact'
import { useState } from 'preact/hooks'
import { Box, Menu, SubMenu, MenuItem, FAIcon, Switch } from '../../src'
import { CompatAlign } from '../../src/utils/CompatAlign'

export const MenuPanel = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Box vertical padding={8}>
      <Switch
        width={400}
        label="Collapse"
        align={CompatAlign.Justify}
        margin={{ y: 8 }}
        onChange={(checked) => setCollapsed(checked)}
      />
      <Menu vertical collapsed={collapsed} width={400} collapsedShow={['10022', '10023', '10024']}>
        <MenuItem id={'10022'}>
          <Box vAlign={CompatAlign.Center}>
            <div style={{ width: '40px', textAlign: 'center' }}>
              <FAIcon icon="fa fa-home"/>
            </div>
            <span>Home</span>
          </Box>
        </MenuItem>
        <MenuItem id={'10049'}>Sites</MenuItem>
        <MenuItem id={'10023'}>
          <Box vAlign={CompatAlign.Center}>
            <div style={{ width: '40px', textAlign: 'center' }}>
              <FAIcon icon="fa fa-user"/>
            </div>
            <span>User</span>
          </Box>
        </MenuItem>
        <SubMenu id={'10024'} title="CEO" icon="fas fa-sitemap">
          <SubMenu id={'10025'} title="CTO">
            <SubMenu id={'10026'} title="Software engineer">
              <SubMenu id={'10027'} title="Level 1">
                <SubMenu id={'10028'} title="Sublevel 1">
                  <MenuItem id={'10029'}>Subsublevel 1</MenuItem>
                  <MenuItem id={'10030'}>Subsublevel 2</MenuItem>
                </SubMenu>
                <SubMenu id={'10031'} title="Sublevel 2">
                  <MenuItem id={'10032'}>Subsublevel 1</MenuItem>
                  <MenuItem id={'10033'}>Subsublevel 2</MenuItem>
                </SubMenu>
              </SubMenu>
              <MenuItem id={'10034'}>Level 2</MenuItem>
              <MenuItem id={'10035'}>Level 3</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu id={'10036'} title="CFO">
            <SubMenu id={'10037'} title="Finance assistant">

            </SubMenu>
          </SubMenu>
          <SubMenu id={'10038'} title="CMO">
            <SubMenu id={'10039'} title="Social media">

            </SubMenu>
          </SubMenu>
        </SubMenu>
        <SubMenu id={'10040'} title="Shop">
          <SubMenu id={'10041'} title="Books">
            <SubMenu id={'10042'} title="Sale">
              <MenuItem id={'10043'}>Paperbacks</MenuItem>
            </SubMenu>
            <MenuItem id={'10044'}>Fiction</MenuItem>
            <MenuItem id={'10045'}>Nonfiction</MenuItem>
          </SubMenu>
          <SubMenu id={'10046'} title="Hardware">
            <MenuItem id={'10047'}>Desktops</MenuItem>
            <MenuItem id={'10048'}>Laptops</MenuItem>
          </SubMenu>
        </SubMenu>
        <MenuItem id={'10050'}>Zones</MenuItem>
        <MenuItem id={'10051'}>Tests</MenuItem>
        <MenuItem id={'10052'}>Reports</MenuItem>
      </Menu>
    </Box>
  )
}