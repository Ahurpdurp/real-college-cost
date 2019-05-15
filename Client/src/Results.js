import React, {Component} from 'react';
import { connect } from 'react-redux'
import "./Search.css"
import Panel from 'react-bulma-components/lib/components/panel';

class Results extends Component{


    onCollegeSelect = (schoolName,schoolId,schoolType) => {
        if(schoolType === 1){
            this.props.onCollegeAddGlobal(schoolName,schoolId,'public')
            this.props.history.push('/main/state');
        }
        else{
            console.log(schoolType)
            this.props.onCollegeAddGlobal(schoolName,schoolId,'private')
            this.props.history.push('/main/2');
        }
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
                        <Panel.Block onClick = {() => this.onCollegeSelect(x['school.name'], x.id, x['school.ownership'])} style = {{'cursor': 'pointer','marginTop':'1em','justifyContent':'center','width':'70%'}}>
                        {x['school.name']}
                        </Panel.Block>
                    )
                })}
                </Panel>
            </div>
        )
}
}

const mapDispatchToProps = (dispatch) => {
    return {
      onCollegeAddGlobal: (schoolName,schoolId,schoolType) => dispatch({type: 'SELECT_COLLEGE', schoolId:schoolId, schoolName:schoolName,schoolType:schoolType})
    }
  }

  export default connect(null, mapDispatchToProps)(Results)
