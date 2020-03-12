import React,{Component, Fragment} from 'react';
import {getProjectListSetting} from "../../../models/media/js/externalRequestManager";
import MaterialTable from 'material-table';
import $ from 'jquery';

export default class ProjectTable extends Component{
    
    
        state = {
            projectList : []
        }
    

    componentWillMount = () => {
        let THIS = this;
        var setting  = getProjectListSetting();
        $.ajax(setting).done(function (response) {
            console.log(response);
            let resp = JSON.parse(response);
            THIS.setState({
                projectList:resp
            });
        })
    }

    render(){
        let columns = [
            { title: 'Project Id', field: 'project_id' },
            { title: 'Project Name', field: 'project_name' }
            
          ];

        return(
            <Fragment>
                    <MaterialTable 
                        title="Project List"
                        columns={columns}
                        data={this.state.projectList}
                    />
            </Fragment>
        )
    }
}