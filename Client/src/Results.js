import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import "./Search.css"
import Panel from 'react-bulma-components/lib/components/panel';

class Results extends Component{


    onCollegeSelect = (schoolName,schoolId) => {
        this.props.onCollegeAddGlobal(schoolName,schoolId)
    }

    sortBySchoolName = (a,b) => {
        let schoolA = a['school.name'].toUpperCase();
        let schoolB = b['school.name'].toUpperCase();
        let comparison = 0;
        if (schoolA > schoolB) {
            comparison = 1;
        } else if (schoolA < schoolB) {
            comparison = -1;
        }
        return comparison;
    }

    render(){
        return(
            <div>
                <Panel style = {{'padding-left':'20%'}}>
                {this.props.searchResults.sort(this.sortBySchoolName).map(x => {
                    return (
                        <Link style = {{'text-decoration':'none'}} to = '/main/2'>
                        <Panel.Block onClick = {() => this.onCollegeSelect(x['school.name'], x.id)} style = {{'marginTop':'1em','justifyContent':'center','width':'70%'}}>
                        {x['school.name']}
                        </Panel.Block>
                        </Link>
                    )
                })}
                </Panel>
            </div>
        )
}
}

const mapDispatchToProps = (dispatch) => {
    return {
      onCollegeAddGlobal: (schoolName,schoolId) => dispatch({type: 'SELECT_COLLEGE', schoolId:schoolId, schoolName:schoolName})
    }
  }

  export default connect(null, mapDispatchToProps)(Results)
