import { useState } from 'react'
import Add from '../../components/add/Add'
import DataTable from '../../components/dataTable/DataTable'
import './Products.scss'
import type { GridColDef } from '@mui/x-data-grid';
import { products } from '../../Data';
// import { useQuery } from '@tanstack/react-query';


const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "assets/noavatar.png"} alt="" />;
        },
    },
    {
        field: "title",
        type: "string",
        headerName: "Title",
        width: 200,
    },
    {
        field: "color",
        type: "string",
        headerName: "Color",
        width: 100,
    },
    {
        field: "price",
        type: "string",
        headerName: "Price",
        width: 100,
    },
    {
        field: "producer",
        headerName: "Producer",
        type: "string",
        width: 100,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 120,
        type: "string",
    },
    {
        field: "inStock",
        headerName: "In Stock",
        width: 120,
        type: "boolean",
    },
];

const Products = () => {
    const [open, setOpen] = useState(false)

    // const { isLoading, data } = useQuery({
    //   queryKey: ["allproducts"],
    //   queryFn: () =>
    //     fetch("http://localhost:8800/api/products").then(
    //       (res) => res.json()
    //     ),
    // });

    return (
        <div className='products'>
            <div className="info">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>Add New Product</button>
            </div>
            <DataTable slug="products" columns={columns} rows={products} />
            {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
            {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
        </div>
    )
}
export default Products