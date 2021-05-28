import PokemonList from "./PokemonList";
import PokemonForm from "./PokemonForm";
import { Grid, GridRow, GridColumn } from 'semantic-ui-react'

function Home() {
    return (
        <Grid padded>
            <GridRow>
                <GridColumn width={2}></GridColumn>
                <GridColumn width={12}><PokemonForm /></GridColumn>
                <GridColumn width={2}></GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={2}></GridColumn>
                <GridColumn width={12}><PokemonList /></GridColumn>
                <GridColumn width={2}></GridColumn>
            </GridRow>
        </Grid>
    )
}

export default Home
