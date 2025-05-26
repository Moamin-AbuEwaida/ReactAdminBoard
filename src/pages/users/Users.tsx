import { useState } from 'react';
import DataTable from '../../components/dataTable/DataTable'
import { userRows } from '../../Data';
import './Users.scss'
import { type GridColDef } from '@mui/x-data-grid';
import Add from '../../components/add/Add';

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    {
        field: "img",
        headerName: "Avatar",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "assets/noavatar.png"} alt="" />;
        },
    },
    {
        field: "firstName",
        type: "string",
        headerName: "First name",
        width: 100,
    },
    {
        field: "lastName",
        type: "string",
        headerName: "Last name",
        width: 100,
    },
    {
        field: "email",
        type: "string",
        headerName: "Email",
        width: 200,
    },
    {
        field: "phone",
        type: "string",
        headerName: "Phone",
        width: 150,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 120,
        type: "string",
    },
    {
        field: "verified",
        headerName: "Verified",
        width: 90,
        type: "boolean",
    },
];



const Users = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='users'>
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
            {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Users