import { Grid, GridRow, GridColumn, Menu, MenuItem } from 'semantic-ui-react'

function Navigation({ children }) {
    return (
        <Grid padded="vertically">
            <GridRow stretched>
                <GridColumn width={16}>
                    <Menu fixed="top">
                        <MenuItem as="a" header>
                            <div>Pokemon</div>
                        </MenuItem>
                    </Menu>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={16}>{children}</GridColumn>
            </GridRow>
        </Grid>
    )
}

export default Navigation
