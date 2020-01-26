import React from 'react';
import { Layout, LayoutPanel, DataGrid, GridColumn } from 'rc-easyui';
import PropertyGrid from "../property/property";
import '../theme/style.css'
import '../theme/react.css'
import '../theme/icon.css'
import './style.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getData(),
            itemDetailData: null,
            processedDetailData: null,
            itemMatrix: [
                //{"nameField": "uuid", "valueField": null, "titleField": "UUID", "groupField": "Основные", "editorField": "text"},
                {"nameField": "name", "valueField": null, "titleField": "Name", "groupField": "Main",
                    "editorField": "text", "rules": ["required",]},
                {"nameField": "code", "valueField": null, "titleField": "Code", "groupField": "Main",
                    "editorField": "text", "rules": ["required", "positive"] },
                {"nameField": "articleNumber", "valueField": null, "titleField": "Article", "groupField": "Main",
                    "editorField": "text", "rules": ["nullable",] },
                {"nameField": "barCodes", "valueField": null, "titleField": "Barcode", "groupField": "Codes",
                    "editorField": "text", "dataField": null, "edit": true, "rules": ["nullable"] },

                {"nameField": "price", "valueField": null, "titleField": "Selling price", "groupField": "Prices",
                    "editorField": "text", "rules": ["required", "precision2",] },
                {"nameField": "costPrice", "valueField": null, "titleField": "Purchase price", "groupField": "Prices",
                    "editorField": "text", "rules": ["required", "precision2"] },

                {"nameField": "quantity", "valueField": null, "titleField": "Rest", "groupField": "Stock",
                    "editorField": "text", "rules": ["required", "precision3"] },

                {"nameField": "measureName", "valueField": null, "titleField": "Measures", "groupField": "Prices",
                    "editorField": "combo", "dataField": "measureTypes", "rules": ["required",]},
                {"nameField": "tax", "valueField": null, "titleField": "tax", "groupField": "Prices",
                    "editorField": "combo", "dataField": "taxTypes", "rules": ["required",] },
                {"nameField": "allowToSell", "valueField": null, "titleField": "Sale ban", "groupField": "Stock",
                    "editorField": "switch", "rules": ["required",] },
                {"nameField": "description", "valueField": null, "titleField": "Description", "groupField": "Main",
                    "editorField": "text", "rules": ["nullable",] },

                {"nameField": "type", "valueField": null, "titleField": "Type of the goods", "groupField": "Main",
                    "editorField": "combo", "dataField": "productTypes", "rules": ["required",] },

                {"nameField": "group", "valueField": null, "titleField": "is Group", "groupField": "Main",
                    "editorField": "switch", "rules": ["required",] },
                {"nameField": "parentUuid", "valueField": null, "titleField": "Parent group", "groupField": "Main",
                    "editorField": "tree", "dataField": null, "rules": ["nullable",] },
            ],
        }
    }

    getData() {
        return [
            {
                "uuid": "011845e5-d2f3-433e-a961-dcdbd4e6927b",
                "group": false,
                "hasVariants": false,
                "type": "NORMAL",
                "name": "Koi",
                "code": "86",
                "barCodes": "4897040852920",
                "price": 150,
                "costPrice": 87,
                "quantity": 3,
                "measureName": "шт",
                "tax": "NO_VAT",
                "allowToSell": true,
                "description": "",
                "articleNumber": "",
                "parentUuid": null,
                "alcoCodes": null,
                "alcoholByVolume": null,
                "alcoholProductKindCode": null,
                "tareVolume": null
            },
            {
                "uuid": "2d852d4f-48c2-4db3-b27d-f9be610a3408",
                "group": false,
                "hasVariants": false,
                "type": "NORMAL",
                "name": "Dalmation",
                "code": "116",
                "barCodes": [],
                "price": 400,
                "costPrice": 250,
                "quantity": 3,
                "measureName": "шт",
                "tax": "NO_VAT",
                "allowToSell": true,
                "description": "",
                "articleNumber": "",
                "parentUuid": null,
                "alcoCodes": null,
                "alcoholByVolume": null,
                "alcoholProductKindCode": null,
                "tareVolume": null
            },
            {
                "uuid": "900e9658-02fc-4c40-be60-093683c72a15",
                "group": false,
                "hasVariants": null,
                "type": "NORMAL",
                "name": "Rattlesnake",
                "code": "5",
                "barCodes": "4605817132102",
                "price": 260,
                "costPrice": 232,
                "quantity": 43,
                "measureName": "шт",
                "tax": "NO_VAT",
                "allowToSell": true,
                "description": "",
                "articleNumber": "",
                "parentUuid": null,
                "alcoCodes": null,
                "alcoholByVolume": null,
                "alcoholProductKindCode": null,
                "tareVolume": null
            },
            {
                "uuid": "1194fc78-50dd-4d93-a2cb-11f8b93418e9",
                "group": false,
                "hasVariants": false,
                "type": "NORMAL",
                "name": "Rattlesnake",
                "code": "101",
                "barCodes": "4607141351297",
                "price": 1500,
                "costPrice": 1150,
                "quantity": 3,
                "measureName": "шт",
                "tax": "NO_VAT",
                "allowToSell": true,
                "description": "",
                "articleNumber": "",
                "parentUuid": null,
                "alcoCodes": null,
                "alcoholByVolume": null,
                "alcoholProductKindCode": null,
                "tareVolume": null
            },
            {
                "uuid": "7442d67b-dd94-49f6-a2a4-8bbc0a63b15d",
                "group": false,
                "hasVariants": false,
                "type": "NORMAL",
                "name": "Iguana",
                "code": "537",
                "barCodes": "2000000000268",
                "price": 350,
                "costPrice": 250,
                "quantity": "0.000",
                "measureName": "шт",
                "tax": "NO_VAT",
                "allowToSell": true,
                "description": "",
                "articleNumber": "192416",
                "parentUuid": null,
                "alcoCodes": null,
                "alcoholByVolume": null,
                "alcoholProductKindCode": null,
                "tareVolume": null
            },
            {
                "uuid": "8cc62770-fea1-4f5e-a2cc-f3eeaf727d97",
                "group": false,
                "hasVariants": false,
                "type": "NORMAL",
                "name": "Manx",
                "code": "538",
                "barCodes":"4690665027182",
                "price": 200,
                "costPrice": 85.52,
                "quantity": "0.000",
                "measureName": "шт",
                "tax": "NO_VAT",
                "allowToSell": true,
                "description": "",
                "articleNumber": "",
                "parentUuid": null,
                "alcoCodes": null,
                "alcoholByVolume": null,
                "alcoholProductKindCode": null,
                "tareVolume": null
            },
            {
                "uuid": "90dd1bd3-947f-4668-8bb0-e43ecef87470",
                "group": false,
                "hasVariants": false,
                "type": "NORMAL",
                "name": "Persian",
                "code": "546",
                "barCodes": "V0034046",
                "price": 300,
                "costPrice": 147.36,
                "quantity": "0.000",
                "measureName": "шт",
                "tax": "NO_VAT",
                "allowToSell": true,
                "description": "",
                "articleNumber": "",
                "parentUuid": null,
                "alcoCodes": null,
                "alcoholByVolume": null,
                "alcoholProductKindCode": null,
                "tareVolume": null
            },
        ]
    }

    processingItemData = (itemData, matrix) => {
    console.log("processingItemData=>", itemData);
    if(!itemData || !matrix)
        return null;
    else
        return matrix.map((property) => {
            // Если в свойстве пришел массив, то отправляем его в dataField
            if(Array.isArray(itemData[property.nameField]))
                property.dataField = itemData[property.nameField]
                    .map((code)=>{ return { value: code, text: code } });
            else property.valueField = itemData[property.nameField];
            //console.log(property);
            //if(property.nameField === "parentUuid") property.dataField = treeData;
            return property;
        });
};


    handleRowDblClick = (row) =>{
        const { itemMatrix } = this.state;
        const processedDetailData = this.processingItemData(row , itemMatrix);
            console.log("handleRowDblClick item=>", row);
            this.setState({
                itemDetailData: row,
                processedDetailData,
            })
    };


    render() {
        const { data, processedDetailData, constants } = this.state;

        return (
            <div>
                <h2>Split Panel</h2>
                <Layout style={{ width: "100%"}}>
                    <DataGrid
                        ref = { list=>this.list=list }
                        data = { data }
                        //renderItem = { this.renderRow }
                        style = {{ height: 'calc(100vh - 60px)' }}
                        columnMoving
                        columnResizing
                        editMode = "row"
                        selectionMode ='single'
                        selection={ this.state.selection }
                        onRowDblClick = { this.handleRowDblClick }
                        //onSelectionChange = { this.handleSelectionChange }
                        >
                        <GridColumn
                            field="code" title="Код" width="10%"/>
                        <GridColumn
                            field="name"
                            title="Name"
                            width="50%"/>
                        <GridColumn field="price" title="Sales price" width="10%" align="right"

                        />
                        <GridColumn field="quantity" title="Quantity" align="right" width="10%"
                        />
                        <GridColumn field="description" title="Description" width="10%"/>
                        <GridColumn field="measureName" title="measure" width="10%" align="center"
                        />
                    </DataGrid>


                    <LayoutPanel region="east" split style = {{ minWidth: 200, maxWidth: 400 }}>
                        <PropertyGrid
                            { ...constants }
                            data = { processedDetailData }
                        />
                    </LayoutPanel>
                </Layout>
            </div>
        );
    }
}

export default App;
