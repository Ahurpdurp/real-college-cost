import React, {Component} from 'react';
import 'react-bulma-components/lib/components/form';
import Heading from 'react-bulma-components/lib/components/heading';
import { connect } from 'react-redux'
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';

class TotalCost extends Component{
    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div>
                <Heading subtitle>Your Grand Total Is...(Drumroll Please)</Heading>
                <Heading>{this.props.total} Dollars! (For one year).</Heading>
                <Heading>Let's see how your costs break down:</Heading>
                <div style = {{'width':'20%'}}>
                <Card>
                    <Card.Image  src="http://bulma.io/images/placeholders/1280x960.png" />
                    <Card.Content>
                        <Media>
                        <Media.Item>
                            <Heading size={4}>John Smith</Heading>
                        </Media.Item>
                        </Media>
                        <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#1">#css</a> <a href="#2">#responsive</a>
                        <br />
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </Content>
                    </Card.Content>
                </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total,
    }
}

export default connect(mapStateToProps)(TotalCost)