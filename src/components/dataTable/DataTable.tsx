import './DataTable.scss'
import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid/internals';
import { Link } from 'react-router';



type Props = {
    columns: GridColDef[];
    rows: object[];
    slug: string;
}


const DataTable = (props: Props) => {

    const handleDelete = (id: number) => {
        // delete the item function
        // if we are using API such as axios,
        // axios.delete('/api/${slug}/id')
        console.log('id number ' + id + ' has been deleted')
    }

    const actionColumn: GridColDef = {
        field: "action",
        headerName: 'Action',
        width: 180,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src="assets/view.svg" alt="" />

                    </Link>
                    <div className='delete' onClick={() => handleDelete(params.row.id)}>
                        <img src="assets/delete.svg" alt="" />

                    </div>
                </div>
            )
        }
    }

    return (
        <div className='dataTable'>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    className='dataGrid'
                    rows={props.rows}
                    columns={[...props.columns, actionColumn]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    showToolbar
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        }
                    }}
                    pageSizeOptions={[10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    disableColumnFilter
                    disableDensitySelector
                    disableColumnSelector
                />
            </Box>
        </div>
    )
}

export default DataTable