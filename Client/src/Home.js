import React, {Component} from 'react'
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Container from 'react-bulma-components/lib/components/container';

class Home extends Component{
    render(){
        return(
            <div>
        <Hero color="primary">
            <Hero.Body>
                <Container>
                <Heading>Real College Cost</Heading>
                <Heading subtitle size={3}>
                    College's expensive, and tuition isn't the whole picture. 
                </Heading>
                </Container>
            </Hero.Body>
            </Hero>
            </div>
        )
    }
}

export default Home 