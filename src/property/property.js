import React from 'react';
import { DataGrid, GridColumn, Tooltip, TextBox, SwitchButton } from 'rc-easyui'

export default class PropertyGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getData()
        };
        this.cellErrorMessage = "Wrong data!";
    };

    getData = () =>{
        const { data } = this.props;
        return data
    };

    clearData = () => {
        this.setState({ data: [] })
    };
    changeData = () => {
        const { data } = this.props;
        this.setState({ data })
    };

    addData = () =>{
        const { data } = this.state;
        const newData = [].concat(data,
            {"nameField": "length", "valueField": data.length, "titleField": "length", "groupField": "length",
                    "editorField": "text"});
        this.setState({ data: newData });
        //console.log("addData=>", );
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.data !== this.props.data){
            console.log("componentDidUpdate");
             this.changeData();
        }
    }


    /* ----------------- Render методы отображения компонента ------------------------- */
    renderEditor = ({ row, error }) =>{
        // Todo: Доделать
        if (row.editorField === "text")
            return( <Tooltip content={ error } tracking>
                <TextBox value={ row.valueField } placeholder={ row.titleField }/>
            </Tooltip>);
        else if (row.editorField === "switch")
            return(<SwitchButton value={ row.valueField }/>);
    };

    renderView = ({ value, row }) => {
        console.log("render view=>", row.nameField, value);
        if (row.editorField === "text")
            return(<div>{ row.valueField }</div>);
        else if(row.editorField === "number")
            return(<div>{ row.valueField }</div>);
        else if(row.editorField === "switch")
            return(<SwitchButton value={row.valueField}/>);

        // Ошибка
        return(<div className="error">{ this.cellErrorMessage }</div>);
    };

    renderGroup = ({ value, rows }) => {
        return (
            <span style={{ fontWeight: 'bold' }}>{ value } - <span style={{ color: 'red' }}>{ rows.length }</span> properties</span>
        )
    };


    render() {
        const { data, rules } = this.state;
        console.log("item render =>", data);
        return (
            <div>
                <DataGrid
                    ref={detail => this.detail = detail}
                    data={data}
                    idField = "valueField"
                    columnResizing
                    expanderWidth={ 20 }
                    selectionMode="row"
                    editMode="row"
                    groupField="groupField"
                    renderGroup={ this.renderGroup }
                >
                    <GridColumn width={ 25 } />
                    <GridColumn field="titleField" title="Field name" width="40%" />
                    <GridColumn field="valueField" title="Value" width="60%"
                                editable
                                editRules={ rules }
                                editor={ this.renderEditor }
                                render={ this.renderView }
                    />
                </DataGrid>
                <button onClick={this.changeData.bind(this)}>Change Data</button>
                <button onClick={() =>this.addData() }>Add Data</button>
                <button onClick={() =>this.clearData()}>Clear Data</button>
            </div>
        );
    }
}