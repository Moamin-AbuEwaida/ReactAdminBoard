import type { GridColDef } from '@mui/x-data-grid';
import './Add.scss'

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    columns: GridColDef[];
    slug: string;
}

const Add = (props: Props) => {
    return (
        <div className='add'>
            <div className="modal">
                <span className="close" onClick={() => props.setOpen(false)}>x</span>
                <h1>Add new {props.slug}</h1>
                <form action="">
                    {props.columns.filter((item) => item.field !== 'id' && item.field !== 'img').map(column => (
                        <div className="item" key={column.headerName}>
                            <label>{column.headerName}</label>
                            <input type={column.type} placeholder={column.field} />
                        </div>
                    ))}
                </form>
            </div>
        </div>
    )
}

export default Add