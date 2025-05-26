import DataTable from '../../components/dataTable/DataTable'
import { userRows } from '../../Data';
import './Users.scss'
import { type GridColDef } from '@mui/x-data-grid';

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
    return (
        <div className='users'>
            <div className="info">
                <h1>Users</h1>
                <button>Add New User</button>
            </div>
            <div>
                <DataTable slug="users" columns={columns} rows={userRows} />
            </div>
        </div>
    )
}

export default Users